function project_lead_project_count_update(l,name){
	filtered_list = _.filter(l,function(D){ 
		const class_name = String($(D).attr('class'))
		console.log({D,class_name})
		return class_name.indexOf(name) > -1 })
	return filtered_list.length
}

function project_count_update_team(){
	const projects_list = $('article')
	$( ".dropdown-item" ).each(function( i ) {
		const dropdown_name = $( this ).find('.dropdown_name').html()
		const project_count = project_lead_project_count_update(projects_list,dropdown_name)
		console.log({dropdown_name,project_count})
		$( this ).find('.project_count').html(project_count)
	});

}

function update_project_count(){
	project_count_update_team()
	$('#project_count').html($('article').length)
}
