function graph(payload){

	var color = d3.scaleLinear()
    .domain(colorSchemes.altColor.map(function(item){
    	return item[0]
    }))
    .range(colorSchemes.altColor.map(function(item){
    	return item[1]
    }));
    console.log(color(3600))


	var data = payload ? 
	payload.features.map(function(item,index){
		return item.properties.area//Math.pow(item.properties.area,0.5)/(item.properties.time)
	}).reverse()
	: new Array(60);



	var factor = d3.max(data)/180;

	var bars = d3.select('#graph')
		.selectAll('.bar')
		.data(data);

	bars
		.enter()
		.append('div')
		.classed('bar', true)
		.style('height', function(d,i){
			return 1+d/factor+'px'
		})
		.style('background-color', function(d,i){
			return color(i*60)
		});

	bars
		.attr('style', function(d,i){
			return 'height:'+d/factor+'px'
		})
		.style('background-color', function(d,i){
			return color(i*60)
		});



	// update axis

	var axisTicks = [];

	for (var a=0; a<=state.threshold; a+=state.quantizedInterval[state.threshold]){
		axisTicks.push(a)
	}

	console.log(axisTicks)
	d3.select('#axis')
		.selectAll('text')
		.data(axisTicks)
		.enter()
		.append('text')
		.attr('x', function(d){return d*5/60})
		.attr('y', 6)
		.text(function(d){return d/60})
}