const text = document.querySelector(".dynamic-txt");
            const texts = ["Developer", "Student"];
            let index = 0;
            const textLoad = () => {                   
                text.textContent = texts[index];
                index = (index + 1) % texts.length;
                setTimeout(textLoad, 2500);
            }
            textLoad();