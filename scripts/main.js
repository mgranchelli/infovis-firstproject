var data   = null,
    margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width  = 960 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom,
    current_leaf_x = null,
    current_leaf_y = null;

    
// Scale for x-axis
var xScale = d3.scaleLinear().range([150, width-150]).interpolate(d3.interpolateRound);

// Scale for y-axis
var yScale = d3.scaleLinear().range([height-150, 150]).interpolate(d3.interpolateRound);

// Scale for leaves
var leafScale = d3.scaleLinear().range([1, 200]).interpolate(d3.interpolateRound);


// Update xScale.domain() 
 function updateXScaleDomain() {
    xScale.domain([d3.min(data, function(d) { return d.x; }), d3.max(data, function(d) { return d.x; })]);
}


// Update yScale.domain()
 function updateYScaleDomain() {
    yScale.domain([d3.min(data, function(d) { return d.y; }), d3.max(data, function(d) { return d.y; })]);
}

// Update leafScale.domain()
function updateLeafScaleDomain() {
    leafScale.domain([
        d3.min(data, function(d) { 
            return d.leaf_1, d.leaf_2, d.leaf_3, d.leaf_4; }), 
        d3.max(data, function(d) { 
            return d.leaf_1, d.leaf_2, d.leaf_3, d.leaf_4; })]);
}


// Create svg
var svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)      
    .attr('height', height + margin.top + margin.bottom)   
    .append('g')                                          
    .attr('id', uuidv4())
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');  


/**
 * Update data
 * @param {*} leaf
 * @param {*} prop 
 */
 function update(leaf, prop) {
    // Left click
    if(prop == 'x' & current_leaf_x != leaf.x) {
        current_leaf_x = leaf.x
        // Update coordinate x
        data = d3.map(data, function(d) {
            //console.log(eval('d.leaf_' + leaf.x))
            return {
                ...d,
                x: yScale(d.y) + eval('d.leaf_' + leaf.x) * xScale(d.x)
            };
        })
    }
    // Right click
    else if(prop == 'y' & current_leaf_y != leaf.y) {
        current_leaf_y = leaf.y
        // Update coordinate y
        data = d3.map(data, function(d) {
            return {
                ...d,
                y: xScale(d.x) + eval('d.leaf_' + leaf.y) * yScale(d.y)
            };
        });
    }
    //console.log("Current leaf (x, y): (", current_leaf_x, ",", current_leaf_y, ")")
    // Update
    draw();
}

// Draw
function draw() {
    // Update domain
    updateXScaleDomain();
    updateYScaleDomain();
    updateLeafScaleDomain();
    //console.log(data)
    let elem = svg.selectAll('.leaves').data(data, function(d) {
        return d.id;
    })

    let elemEnter = elem.enter()
        .append('g')
        .attr('class', 'leaves')
        .attr('transform', function(d) {
            return 'translate(' + xScale(d.x) + ',' + yScale(d.y) + ')'
        }) ;
        
        elemEnter.append('path')
            // Draw leaf 1 
            .attr('d', function(d) {       
                return 'M0,0 C' + leafScale(d.leaf_1) + ',' + leafScale(d.leaf_1) + ' 40,80 0,50 C-40,80 -' + 
                leafScale(d.leaf_1) + ',' + leafScale(d.leaf_1) + ' 0,0'
                })
            .attr('transform', 'rotate(45)')
            .attr('class', 'leaf_1')
            .style('stroke-width', 2)
            .style('stroke', 'black')
            .style('fill', 'green')
            .style('cursor', 'pointer')
            // Left click
            .on('click', function(d, i) {
                update({ x: '1' }, 'x');  
            })
            // Right click
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: '1' }, 'y');
            });
            

        elemEnter.append('path')
            // Draw leaf 2
            .attr('d', function(d) {
                return 'M0,0 C' + leafScale(d.leaf_2) + ',' + leafScale(d.leaf_2) + ' 40,80 0,50 C-40,80 -' + 
                leafScale(d.leaf_2) + ',' + leafScale(d.leaf_2) + ' 0,0'
                })
            .attr('transform', 'rotate(135)')
            .attr('class', 'leaf_2')
            .style('stroke-width', 2)
            .style('stroke', 'black')
            .style('fill', 'green')
            .style('cursor', 'pointer')
            // Left click
            .on('click', function(d, i) {
                update({ x: '2' }, 'x');
            })
            // Right click
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: '2' }, 'y');
            });
        
        elemEnter.append('path')
            // Draw leaf 3
            .attr('d', function(d) {
                return 'M0,0 C' + leafScale(d.leaf_3) + ',' + leafScale(d.leaf_3) + ' 40,80 0,50 C-40,80 -' + 
                leafScale(d.leaf_3) + ',' + leafScale(d.leaf_3) + ' 0,0'
                })
            .attr('transform', 'rotate(225)')
            .attr('class', 'leaf_3')
            .style('stroke-width', 2)
            .style('stroke', 'black')
            .style('fill', 'green')
            .style('cursor', 'pointer')
            // Left click
            .on('click', function(d, i) {
                update({ x: '3' }, 'x');
                
            })
            // Right click
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: '3' }, 'y');
            });

        elemEnter.append('path')
            // Draw leaf 4
            .attr('d', function(d) {
                return 'M0,0 C' + leafScale(d.leaf_4) + ',' + leafScale(d.leaf_4) + ' 40,80 0,50 C-40,80 -' + 
                leafScale(d.leaf_4) + ',' + leafScale(d.leaf_4) + ' 0,0'
                })
            .attr('transform', 'rotate(315)')
            .attr('class', 'leaf_4')
            .style('stroke-width', 2)
            .style('stroke', 'black')
            .style('fill', 'green')
            .style('cursor', 'pointer')
            // Left click
            .on('click', function(d, i) {
                update({ x: '4' }, 'x');
            })
            // Right click
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: '4' }, 'y');
            });

    // Leaves transition
    d3.selectAll('.leaves')
        .transition()
        .duration(500)
        .attr('transform', function(d) {
            return 'translate(' + xScale(d.x) + ',' + yScale(d.y) + ')'
        })
}


/**
 * Create uuidv4
 * @returns {string}
 * */
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// GET JSON file
d3.json('assets/leaves.json').then(
    function(leaves) {
        //console.log('leaves: ', leaves)
        // Add id and coordinates x and y for each four-leaves
        data = d3.map(leaves, function(d) { 
            return {
                ...d,
                id: uuidv4(),
                x: Math.floor(Math.random() * width),
                y: Math.floor(Math.random() * height)
            }; 
        });
        // Start
        draw();
    }
);
