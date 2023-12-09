        //获取学号，密码
        var mima1=document.getElementById('mima1');
        var xuehao1=document.getElementById('xuehao1');
        //获取提示信息
        var hhh1=document.getElementById('hhh1');
        var hhh2=document.getElementById('hhh2');
        //声明一个验证方法
        var check1={
            checkxuehao:function(){
                var pattern=/^[1-9][0-9]{9}$/;
                if(xuehao1.value.length==0){
                    hhh1.innerHTML="不能为空";
                    hhh1.style.color="red";
                    return false;
                }
                else if(!pattern.test(xuehao1.value)){
                    hhh1.innerHTML="格式错误";
                    hhh1.style.color="red";
                    return false;
                }else{
                    hhh1.innerHTML="格式通过";
                    hhh1.style.color="green";
                    return true;
                }
            },
            checkmima:function(){
                var pattern=/[0-9a-zA-Z.]{6,16}$/;
                if(mima1.value.length==0){
                    hhh2.innerHTML="不能为空";
                    hhh2.style.color="red";
                    return false;
                }
                if(!pattern.test(mima1.value)){
                    hhh2.innerHTML="请输入6-16位密码";
                    hhh2.style.color="red";
                    return false;
                }else{
                    hhh2.innerHTML="格式通过";
                    hhh2.style.color="green";
                    return true;
                }
            },
            //表单验证
            checkform(){
            var xuehaopass=this.checkxuehao();
            var mimapass=this.checkmima();
            return xuehaopass&&mimapass;
        }
        }
        //获取学号，密码
        var mima2=document.getElementById('mima2');
        var mima3=document.getElementById('mima3')
        var xuehao2=document.getElementById('xuehao2');
        //获取提示信息
        var hhh3=document.getElementById('hhh3');
        var hhh4=document.getElementById('hhh4');
        var hhh5=document.getElementById('hhh5');
        //声明一个验证方法
        var check2={
            checkxuehao:function(){
                var pattern=/^[1-9][0-9]{9}$/;
                if(xuehao2.value.length==0){
                    hhh3.innerHTML="不能为空";
                    hhh3.style.color="red";
                    return false;
                }
                else if(!pattern.test(xuehao2.value)){
                    hhh3.innerHTML="格式错误";
                    hhh3.style.color="red";
                    return false;
                }else{
                    hhh3.innerHTML="格式通过";
                    hhh3.style.color="green";
                    return true;
                }
            },
            checkmima:function(){
                var pattern=/[0-9a-zA-Z.]{6,16}$/;
                if(mima2.value.length==0){
                    hhh4.innerHTML="不能为空";
                    hhh4.style.color="red";
                    return false;
                }
                if(!pattern.test(mima2.value)){
                    hhh4.innerHTML="请输入6-16位密码";
                    hhh4.style.color="red";
                    return false;
                }else{
                    hhh4.innerHTML="格式通过";
                    hhh4.style.color="green";
                    return true;
                }
            },
            comprise:function(){
                if(mima2.value!==mima3.value){
                    hhh5.innerHTML="请保持两次输入密码一致";
                    hhh5.style.color="red";
                    return false;
                }else if(mima3.value.length==0){
                    hhh5.innerHTML="不能为空";
                    hhh5.style.color="red";
                    return false;
                }
                else{
                    hhh5.innerHTML="通过";
                    hhh5.style.color="green";
                    return true;
                }
            },
            //表单验证
            checkform(){
            var xuehaopass=this.checkxuehao();
            var mimapass=this.checkmima();
            var comprisepass=this.comprise();
            return xuehaopass&&mimapass&&comprisepass;
        }
        }