
        //註冊
        const register = document.querySelector('.register');
        register.addEventListener("click", function(e) {
            const account = document.querySelector('.account');
            const password = document.querySelector('.password');
            callSignUp(account, password);
        })

        function callSignUp(account, password) {
            if (account.value == "" || account.password == "") {
                alert('請確實填寫帳號密碼');
                return
            }
            let obj = {};
            obj.email = account.value;
            obj.password = password.value;
            let urlSignUp = "https://hexschool-tutorial.herokuapp.com/api/signup";
            axios.post(urlSignUp, obj)
                .then(function(response) {
                    console.log(response);
                    alert(response.data.message);
                })
                .catch(function(error) {
                    console.log(error);
                    alert('註冊失敗');
                })
                .finally(() => {
                    document.querySelector('.accountSignIn').value = account.value;
                    document.querySelector('.passwordSignIn').value = password.value;
                    account.value = "";
                    password.value = "";
                });
        }

        //登入

        const sent = document.querySelector('.sent');
        sent.addEventListener("click", function(e) {
            const account = document.querySelector('.accountSignIn');
            const password = document.querySelector('.passwordSignIn');
            callSignIn(account, password);
        })

        function callSignIn(account, password) {
            if (account.value == "" || password.value == "") {
                alert('請確實填寫帳號密碼');
                return
            }
            let obj = {};
            obj.email = account.value;
            obj.password = password.value;
            let url = "https://hexschool-tutorial.herokuapp.com/api/signin";
            axios.post(url, obj)
                .then(function(response) {
                    console.log(response);
                    alert(response.data.message);
                    if (response.data.message == "登入成功") {
                        settime()
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    alert('登入失敗');
                })
                .finally(() => {
                    account.value = "";
                    password.value = "";
                });

        }
        let time = 3;

        function settime() {
            let timeOut = document.querySelector('.timeOut');
            timeOut.style.display = 'block';
            let anb = time + "秒後將關閉視窗";
            timeOut.textContent = anb;
            if (time == 0) {
                window.close();
            } else {
                time--;
            }
            setTimeout(settime, 1000);
        }
