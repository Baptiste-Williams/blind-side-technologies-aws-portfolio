document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch(
                "https://gj3d0cvv44.execute-api.us-west-2.amazonaws.com/prod/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            console.log(result);

            alert(
                "Thank you for contacting Blind Side Technologies!"
            );

            form.reset();

        } catch (error) {

            console.error(error);

            alert(
                "Submission failed. Please try again."
            );

        }

    });

    const themeButton =
        document.getElementById("themeToggle");

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle(
            "light-mode"
        );

    });

});