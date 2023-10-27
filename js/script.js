const d = new Date();
document.getElementById("date").innerHTML = d;
// sending data in google sheet
let url = "https://script.google.com/macros/s/AKfycbyEihkcgy7wjjClIJcRyVe3wYazez5VrPQJNgCZ_2ssMgJIu2TnjHfVlGUe0Fftm2sq/exec";
        let form = document.querySelector('#cont');
        form.addEventListener("submit", (e) => {
            let d = new FormData(form);
            fetch(url, {
                method: "POST",
                body: d
            }).then((res) => res.text())
                .then((finalRes) => alert(finalRes),
                document.querySelector('.form').style.transform="translateY(-200%)"
                )
            e.preventDefault();//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        })
 // sending data in google sheet end
//  form validation
        function validation()
        {
            let x = document.forms["fm"]["nm"].value;
            if(x=="")
            {
                alert("name is mandatoory");
                
                return false;
            }
        }
        function MobileValid()
        {
             let m1=document.querySelector('#mb').value;
            if(parseInt(m1.charAt(0))<6)
            {
                document.querySelector('#mb').style.background="red";
            }else{
                document.querySelector('#mb').style.background="white";
            }
        }