var data   = null,
    backup_data = null,
    border = 5,
    margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width  = 960 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

    
// Scale for x-axis
var xScale = d3.scaleLinear().range([150, width-150]).interpolate(d3.interpolateRound);

// Scale for y-axis
var yScale = d3.scaleLinear().range([height-150, 150]).interpolate(d3.interpolateRound);

// Scale for leaves
var leafScale = d3.scaleLinear().domain([20, 180]).range([10, 100]);

/**
 * Update xScale.domain()
 */
 function updateXScaleDomain() {
    xScale.domain([d3.min(data, function(d) { return d.xPoint; }), d3.max(data, function(d) { return d.xPoint; })]);
}

/**
 * Update yScale.domain()
 */
 function updateYScaleDomain() {
    yScale.domain([d3.min(data, function(d) { return d.yPoint; }), d3.max(data, function(d) { return d.yPoint; })]);
}


// Create svg
var svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)      
    .attr('height', height + margin.top + margin.bottom)   
    .append('g')                                          
    .attr('id', uuidv4())
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');  

function resetValues() {
    data = backup_data
}

/**
 * Update data
 * @param {*} o 
 * @param {*} coordinate
 * @param {*} prop 
 */
 function update(coordinate, prop) {
    // Left click
    if(prop == 'x') {
        if ( xScale.domain()[1] > 10e20 ||  xScale.domain()[0] < 10e-20) {
            resetValues()
        }
        data = d3.map(data, function(d) {
            return {
                ...d,
                xPoint: d.xPoint * (d.xPoint/coordinate.x)
            };
        })
    }
    // Right click
    else {
        if ( yScale.domain()[1] > 10e20 ||  yScale.domain()[0] < 10e-20) {
            resetValues()
        }
        data = d3.map(data, function(d) {
            return {
                ...d,
                yPoint: d.yPoint * (d.yPoint/coordinate.y)
            };
        });
    }
    // Update
    draw();
}

/**
 * Draw 
 */

function draw() {
    // Update domain
    updateXScaleDomain();
    updateYScaleDomain();

    let elem = svg.selectAll('.leaves').data(data, function(d) {
        return d.id;
    })

    let elemEnter = elem.enter()
        .append('g')
        .attr('class', 'leaves')
        .attr('transform', function(d) {
            return 'translate(' + xScale(d.xPoint) + ',' + yScale(d.yPoint) + ')'
        }) ;
        
        elemEnter.append('path')
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
            .on('click', function(d, i) {
                update({ x: -i.leaf_1 }, 'x');  
            })
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: -i.leaf_1 }, 'y');
            });
            

        elemEnter.append('path')
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
            .on('click', function(d, i) {
                update({ x: -i.leaf_2 }, 'x');
            })
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: i.leaf_2 }, 'y');
            });
        
        elemEnter.append('path')
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
            .on('click', function(d, i) {
                update({ x: i.leaf_3 }, 'x');
                
            })
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: i.leaf_3 }, 'y');
            });

        elemEnter.append('path')
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
            .on('click', function(d, i) {
                update({ x: i.leaf_4 }, 'x');
            })
            .on('contextmenu', function(e, i) {
                e.preventDefault();
                update({ y: -i.leaf_4 }, 'y');
            });


    d3.selectAll('.leaves')
        .transition()
        .duration(500)
        .attr('transform', function(d) {
            return 'translate(' + xScale(d.xPoint) + ',' + yScale(d.yPoint) + ')'
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

        // Add data id, xPoint and yPoint
        data = d3.map(leaves, function(d) { 
            return {
                ...d,
                id: uuidv4(),
                xPoint: Math.floor(Math.random() * width),
                yPoint: Math.floor(Math.random() * height)
            }; 
        });
        // Start
        backup_data = data
        draw();
    }
);
