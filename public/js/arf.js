var margin = [20, 20, 20, 20],
    width = Math.max(window.innerWidth - 40, 1200) - margin[1] - margin[3],
    height = Math.max(window.innerHeight - 100, 800) - margin[0] - margin[2],
    i = 0,
    duration = 750,
    root;

// Dinamik ağaç düzeni
var tree = d3.layout.tree()
    .size([width, height])
    .separation(function(a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
    });

var diagonal = d3.svg.diagonal()
    .projection(function (d) { return [d.x, d.y]; });

var zoom = d3.behavior.zoom().on("zoom", null); // Zoom kapalı

var svg = d3.select("#body").append("svg:svg")
    .attr("width", width + margin[1] + margin[3])
    .attr("height", height + margin[0] + margin[2])
    .call(zoom)
    .append("g")
    .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");

var vis = svg.append("g");

// Gradient tanımı
var defs = svg.append("defs");

var gradient = defs.append("linearGradient")
    .attr("id", "linkGradient")
    .attr("gradientUnits", "userSpaceOnUse");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#3ea8d2");

gradient.append("stop")
    .attr("offset", "40%")
    .attr("stop-color", "#3ea8d2");

gradient.append("stop")
    .attr("offset", "45%")
    .attr("stop-color", "#8f05e4");

gradient.append("stop")
    .attr("offset", "55%")
    .attr("stop-color", "#8f05e4");

gradient.append("stop")
    .attr("offset", "60%")
    .attr("stop-color", "#8f05e4");

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#73ece8");

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

window.addEventListener('resize', function() {
    width = Math.max(window.innerWidth - 40, 1200) - margin[1] - margin[3];
    height = Math.max(window.innerHeight - 100, 800) - margin[0] - margin[2];

    tree.size([width, height]);
    svg.attr("width", width + margin[1] + margin[3])
       .attr("height", height + margin[0] + margin[2]);

    gradient.attr("x2", width); // Gradient genişliğini güncelle

    if (root) {
        update(root);
    }
});

function update(source) {
    var nodes = tree.nodes(root).reverse();
    nodes.forEach(function (d) { d.y = d.depth *180; });

    var minX = d3.min(nodes, function(d) { return d.x; });
    var maxX = d3.max(nodes, function(d) { return d.x; });
    var offsetX = (width - (maxX - minX)) / 2 - minX;
    nodes.forEach(function(d) { d.x += offsetX; });

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
        .style("fill", "#8f05e4");

    nodeEnter.append("svg:text")
        .attr("x", 0)
        .attr("y", function (d) { return d.children || d._children ? -15 : 15; })
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
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
        .attr("r", 8)
        .style("fill", "#8f05e4");

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
        .attr("d", function(d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal({ source: o, target: o });
        })
        .style("fill", "none")
        .style("stroke", "url(#linkGradient)")
        .style("stroke-width", "2px")
        .style("stroke-linecap", "round")
        .transition()
        .duration(duration)
        .attr("d", diagonal);

    link.transition()
        .duration(duration)
        .attr("d", diagonal)
        .style("stroke", function(d) {
            // Her link için ayrı gradient oluştur
            var gradientId = "linkGradient_" + d.target.id;
            var linkGradient = defs.append("linearGradient")
                .attr("id", gradientId)
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", d.source.x)
                .attr("y1", d.source.y)
                .attr("x2", d.target.x)
                .attr("y2", d.target.y);
            
            linkGradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", "#3ea8d2");
            linkGradient.append("stop")
                .attr("offset", "30%")
                .attr("stop-color", "#3ea8d2");
            linkGradient.append("stop")
                .attr("offset", "40%")
                .attr("stop-color", "#5a6bc7");
            linkGradient.append("stop")
                .attr("offset", "50%")
                .attr("stop-color", "#8f05e4");
            linkGradient.append("stop")
                .attr("offset", "60%")
                .attr("stop-color", "#5a6bc7");
            linkGradient.append("stop")
                .attr("offset", "70%")
                .attr("stop-color", "#73ece8");
            linkGradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#73ece8");
            
            return "url(#" + gradientId + ")";
        })
        .style("stroke-linecap", "round");

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
