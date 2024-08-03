
document.getElementById("downloadresume").addEventListener("click",(event)=>{
    event.preventDefault()

    const resumeUrl = "./resume/Chetan_Chaudhari_Resume.pdf";
  
    window.open(resumeUrl, '_blank');

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download="Chetan_Chaudhari_Resume.pdf";
    document.body.appendChild(link);

    link.click();
   
    document.body.removeChild(link);

   
   }) ;


    document.querySelectorAll('#nav-menu ul li a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('check').checked = false;
        });
    });

    document.getElementById("visitform").addEventListener("submit", function (event) {
        event.preventDefault();
        addComment();
        document.getElementById("visitform").reset();



    });


    function getData() {
        const name = document.getElementById("name").value
        const message = document.getElementById("message").value
        const email = document.getElementById("email").value;
        return { name, email, message };

    }



    function addComment() {
        const { name, message, email } = getData();
        if (!name || !message || !email) {
            alert("plese fill out all fields");
            return
        }

        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push({ name, message, email });
        localStorage.setItem("comments", JSON.stringify(comments));

       



       



    }

   
  