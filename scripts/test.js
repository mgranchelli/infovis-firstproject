nodeEnter.append('circle')
    /*
        .attr('points', function(d) { 
            return points(d).map(
                function(d) {
                    return [xScale(d.x), yScale(d.y)].join(',');
                }
            ).join(' ');
        })*/
        .attr('cx', 200)
        .attr('cy', 100)
        .attr('r', 20)
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#69a3b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')

    nodeEnter.append('circle')
    /*
        .attr('points', function(d) { 
            return points(d).map(
                function(d) {
                    return [xScale(d.x), yScale(d.y)].join(',');
                }
            ).join(' ');
        })*/
        .attr('cx', 200)
        .attr('cy', 50)
        .attr('r', 20)
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#69a3b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')
    
    nodeEnter.append('circle')
    /*
        .attr('points', function(d) { 
            return points(d).map(
                function(d) {
                    return [xScale(d.x), yScale(d.y)].join(',');
                }
            ).join(' ');
        })*/
        .attr('cx', 100)
        .attr('cy', 50)
        .attr('r', 30)
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#69a3b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')
        
    nodeEnter.append('circle')
        /*
            .attr('points', function(d) { 
                return points(d).map(
                    function(d) {
                        return [xScale(d.x), yScale(d.y)].join(',');
                    }
                ).join(' ');
            })*/
            .attr('cx', 150)
            .attr('cy', 100)
            .attr('r', 30)
            
            .attr('id', function(d) { return d.id; })
            .attr('class', 'circle')
            .attr('fill', '#69a3b2')
            .attr('stroke-width', border)
            .attr('stroke', 'red')

    nodeEnter.append('circle')
            /*
                .attr('points', function(d) { 
                    return points(d).map(
                        function(d) {
                            return [xScale(d.x), yScale(d.y)].join(',');
                        }
                    ).join(' ');
                })*/
                .attr('cx', 100)
                .attr('cy', 150)
                .attr('r', 30)
                
                .attr('id', function(d) { return d.id; })
                .attr('class', 'circle')
                .attr('fill', '#69a3b2')
                .attr('stroke-width', border)
                .attr('stroke', 'red')
    nodeEnter.append('circle')
                /*
                    .attr('points', function(d) { 
                        return points(d).map(
                            function(d) {
                                return [xScale(d.x), yScale(d.y)].join(',');
                            }
                        ).join(' ');
                    })*/
                    .attr('cx', 50)
                    .attr('cy', 100)
                    .attr('r', 30)
                    
                    .attr('id', function(d) { return d.id; })
                    .attr('class', 'circle')
                    .attr('fill', '#69a3b2')
                    .attr('stroke-width', border)
                    .attr('stroke', 'black')
        nodeEnter.append('circle')
            /*
                .attr('points', function(d) { 
                    return points(d).map(
                        function(d) {
                            return [xScale(d.x), yScale(d.y)].join(',');
                        }
                    ).join(' ');
                })*/
                .attr('cx', 100)
                .attr('cy', 100)
                .attr('r', 30)
                
                .attr('id', function(d) { return d.id; })
                .attr('class', 'circle')
                .attr('fill', '#69a3b2')
                .attr('stroke-width', border)
                .attr('stroke', 'red')
                    /*
        .on('click', function(d, i) {
            // update svg if the event is x
            if(evt && evt.key === 'x') {
                update(i, { x: d.x, y: d.y }, 'x');
            }
            // update svg if the event is y
            if(evt && evt.key === 'y') {
                update(i, { x: d.x, y: d.y }, 'y');
            }
        })*/
    //
    /*  DISEGNA L'ALTEZZA
    nodeEnter.append('path')
        .attr('d', function(d) {
            return 'M ' + xScale(d.x + d.width/2) + ' ' + yScale(d.y) +
                ' L' + xScale(d.x + d.width/2) + ' ' + yScale(d.y + d.height) +
                ' z'
            }
        )
        .attr('class', 'triangle-height')
        .style('stroke', 'black')
        .style('stroke-dasharray', '10')
        .style('stroke-width', border)
        .on('click', function(d, i) {
            // update svg if the event is x or y
            if(evt && (evt.key === 'x' || evt.key === 'y')) {
                updateHeight(i, { x: d.x, y: d.y }, evt.key);
            }
        });*/






        elemEnter.append('circle')
        //console.log('scale: ', xScale(10))
        

        .attr('cx', function(d) {
            console.log("The scale x - " + xScale(d.leaf_1 * Math.cos(d.leaf_1)) + " - x: " + d.leaf_1 * Math.cos(d.leaf_1));
            return xScale(xPoint);
        })
        .attr('cy', function (d) {
            console.log("The scale y - " + yScale(d.leaf_1 * Math.sin(d.leaf_1)) + " - y: " + d.leaf_1 * Math.sin(d.leaf_1));
            return xScale(yPoint);
        })
        .attr('r', function (d) {
            console.log("The radius - " + d.leaf_1 + " - scale - " + rscale(d.leaf_1));
            return 20;
        })
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#6923b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')

        elemEnter.append('circle')
        //console.log('scale: ', xScale(10))
        

        .attr('cx', function(d) {
            console.log("The scale x - " + xScale(d.leaf_1 * Math.cos(d.leaf_1)) + " - x: " + d.leaf_1 * Math.cos(d.leaf_1));
            return xScale(xPoint + 50);
        })
        .attr('cy', function (d) {
            console.log("The scale y - " + yScale(d.leaf_1 * Math.sin(d.leaf_1)) + " - y: " + d.leaf_1 * Math.sin(d.leaf_1));
            return yScale(yPoint + 50);
        })
        .attr('r', function (d) {
            console.log("The radius - " + d.leaf_1 + " - scale - " + rscale(d.leaf_1));
            return rscale(d.leaf_1);
        })
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#6923b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')

        elemEnter.append('circle')
        //console.log('scale: ', xScale(10))
        

        .attr('cx', function(d) {
            console.log("The scale x - " + xScale(d.leaf_1 * Math.cos(d.leaf_1)) + " - x: " + d.leaf_1 * Math.cos(d.leaf_1));
            return xScale(xPoint - 50);
        })
        .attr('cy', function (d) {
            console.log("The scale y - " + yScale(d.leaf_1 * Math.sin(d.leaf_1)) + " - y: " + d.leaf_1 * Math.sin(d.leaf_1));
            return yScale(yPoint - 50);
        })
        .attr('r', function (d) {
            console.log("The radius - " + d.leaf_1 + " - scale - " + rscale(d.leaf_1));
            return rscale(d.leaf_2);
        })
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#6923b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')

        elemEnter.append('circle')
        //console.log('scale: ', xScale(10))
        

        .attr('cx', function(d) {
            console.log("The scale x - " + xScale(d.leaf_1 * Math.cos(d.leaf_1)) + " - x: " + d.leaf_1 * Math.cos(d.leaf_1));
            return xScale(xPoint + 50);
        })
        .attr('cy', function (d) {
            console.log("The scale y - " + yScale(d.leaf_1 * Math.sin(d.leaf_1)) + " - y: " + d.leaf_1 * Math.sin(d.leaf_1));
            return yScale(yPoint - 50);
        })
        .attr('r', function (d) {
            console.log("The radius - " + d.leaf_1 + " - scale - " + rscale(d.leaf_1));
            return rscale(d.leaf_3);
        })
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#6923b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')

        elemEnter.append('circle')
        //console.log('scale: ', xScale(10))
        

        .attr('cx', function(d) {
            console.log("The scale x - " + xScale(d.leaf_1 * Math.cos(d.leaf_1)) + " - x: " + d.leaf_1 * Math.cos(d.leaf_1));
            return xScale(xPoint - 50);
        })
        .attr('cy', function (d) {
            console.log("The scale y - " + yScale(d.leaf_1 * Math.sin(d.leaf_1)) + " - y: " + d.leaf_1 * Math.sin(d.leaf_1));
            return yScale(yPoint + 50);
        })
        .attr('r', function (d) {
            console.log("The radius - " + d.leaf_1 + " - scale - " + rscale(d.leaf_1));
            return rscale(d.leaf_4);
        })
        
        .attr('id', function(d) { return d.id; })
        .attr('class', 'circle')
        .attr('fill', '#6923b2')
        .attr('stroke-width', border)
        .attr('stroke', 'black')
    



        elemEnter.append('path')
        .attr('d', function(d) {
            return 'M0,0 C50,55 40,90 0,100 C-40,90 -50,55 0,0'
            }
        )
        .attr('class', 'triangle-height')
        .style('stroke', 'black')
        .style('stroke-dasharray', '10')
        .style('stroke-width', border)




        /*
        d3.select('.leaf_1')
            .transition()
            .duration(500)
            .attr('transform', (data, function(d) {
                console.log('xPoint: ', d.xPoint)
                return 'translate(' + xScale(d.xPoint) + ',' + yScale(d.yPoint) + ') rotate(45) scale(1, 1)'
            }))
        d3.selectAll('.leaf_2')
            .transition()
            .duration(500)
            .attr('transform', function(d) {
                return 'translate(' + xScale(d.xPoint) + ',' + yScale(d.yPoint) + ') rotate(135) scale(1, 1)'
            })
        d3.selectAll('.leaf_3')
            .transition()
            .duration(500)
            .attr('transform', function(d) {
                return 'translate(' + xScale(d.xPoint) + ',' + yScale(d.yPoint) + ') rotate(225) scale(1, 1)'
            })
        d3.selectAll('.leaf_4')
            .transition()
            .duration(500)
            .attr('transform', function(d) {
                return 'translate(' + xScale(d.xPoint) + ',' + yScale(d.yPoint) + ') rotate(315) scale(1, 1)'
            })*/