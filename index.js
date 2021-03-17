class Info{
        constructor(title,instructor,image){
            this.title=title;
            this.instructor=instructor;
            this.image=image;

        }

}

class Ui{
  add(course){

    $("thead").append(`<tr>
    <td><img src="img/${course.image}"></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        </tr>
    `)

  }


  clean(){
    $("#title").val("")
    $("#instructor").val("")
    $("#image").val("")
  }


  delete(){
    $(".delete").on("click",function(e){

        console.log($(this).parent().parent().remove())


        e.preventDefault();
    })
  }


  
  showAlert(message, className){
    var alert = `
     <div class="alert alert-${className}">
        ${message}
     </div>    
    `;

    $(".row").before(alert)

    setTimeout(()=>{
        $('.alert').remove();
    },4000);
}

}


$(document).on("submit","form",function(e){
        
        var title=$("#title").val();
        var instructor=$("#instructor").val();
        var image=$("#image").val();
        const course=new Info(title,instructor,image)
        var ui=new Ui()
       
       
       if(title===""||instructor===""||image===""){

        ui.showAlert('Please complete the form','warning');

       }else{

    
       
        ui.add(course);
        ui.clean()
        ui.delete()
        ui.showAlert('the course has been added','success')
      }

    e.preventDefault()
})