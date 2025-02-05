var margin = [20, 20, 20, 20],
    width = 2000 - margin[1] - margin[3], // Daha geniş boyut
    height = 1200 - margin[0] - margin[2],
    i = 0,
    duration = 750,
    root;

// Dinamik ağaç düzeni
var tree = d3.layout.tree()
    .size([width, height]);

var diagonal = d3.svg.diagonal()
    .projection(function (d) { return [d.x, d.y]; });

// Zoom ve pan özelliği için SVG
//var zoom = d3.behavior.zoom()
  //  .scaleExtent([0.1, 2]) // Yakınlaştırma sınırları
    //.on("zoom", function () {
      //  vis.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    //});

var zoom = d3.behavior.zoom().on("zoom", null); // Zoom davranışı kapalı

var svg = d3.select("#body").append("svg:svg")
    .attr("width", width + margin[1] + margin[3])
    .attr("height", height + margin[0] + margin[2])
    .call(zoom) // Zoom özelliği ekliyoruz
    .append("g")
    .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");

var vis = svg.append("g");

d3.json("arf.json", function (json) {
    root = json;
    root.x0 = width / 2;
    root.y0 = 0;

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    root.children.forEach(collapse);
    update(root);
});

function update(source) {
    var nodes = tree.nodes(root).reverse();
    nodes.forEach(function (d) { d.y = d.depth * 200; }); // Yatay mesafe artırıldı

    var node = vis.selectAll("g.node")
        .data(nodes, function (d) { return d.id || (d.id = ++i); });

    var nodeEnter = node.enter().append("svg:g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
        nodeEnter.on("click", function (d) { 
            if (d.url) {
                window.open(d.url, "_blank");
            } else {
                toggle(d);
                update(d);
            }
        });

    nodeEnter.append("svg:circle")
        .attr("r", 1e-6)
        .style("fill", "green");

    // Yazıları düğümlerin altına eklemek için ayarlandı
    nodeEnter.append("svg:text")
        .attr("x", 0) // Düğüm yazılarını ortaladık
        .attr("y", function (d) { return d.children || d._children ? -15 : 15; }) // Yazılar düğümün altına veya üstüne
        .attr("dy", ".35em")
        .attr("text-anchor", "middle") // Ortalı yazılar
        .text(function (d) { return d.name; })
        .style("font-size", "12px")
        .style("fill", "white")
        .style("fill-opacity", 1e-6);

    nodeEnter.append("svg:title")
        .text(function (d) { return d.description; });

    var nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

    nodeUpdate.select("circle")
        .attr("r", 8) // Daha büyük düğüm çemberleri
        .style("fill", "#00f7fe");

    nodeUpdate.select("text")
        .style("fill-opacity", 1);

    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function (d) { return "translate(" + source.x + "," + source.y + ")"; })
        .remove();

    nodeExit.select("circle")
        .attr("r" , 1e-6);

    nodeExit.select("text")
        .style("fill-opacity", 1e-6);

    var link = vis.selectAll("path.link")
        .data(tree.links(nodes), function (d) { return d.target.id; });

    link.enter().insert("svg:path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
        })
        .transition()
        .duration(duration)
        .attr("d", diagonal);

    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    link.exit().transition()
        .duration(duration)
        .attr("d", function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal({ source: o, target: o });
        })
        .remove();

    nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

function toggle(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
}
