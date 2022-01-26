        interval = 100;

        if (document.getElementById) {
            t = document.getElementById("typing");
            if (t.innerHTML) {
                typingBuffer = "";
                it = 0;
                mytext = t.innerHTML;
                t.innerHTML = "";
                typeit();
            }
        }

        function typeit() {
            mytext = mytext.replace(/<([^<])*>/, "");
            if (it < mytext.length) {
                typingBuffer += mytext.charAt(it);
                t.innerHTML = typingBuffer;
                it++;
                setTimeout("typeit()", interval);
            }
        }
