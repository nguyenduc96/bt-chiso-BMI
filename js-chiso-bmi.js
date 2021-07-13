function chiSobmi(){
    let a = document.getElementById('weight').value;
    let b = document.getElementById('height').value;
    let bmi = a/(b*b);
    let text;
    if (a==""&&b==""){
        text="Bạn chưa nhập các chỉ số.";
        }
        else if (a>0&&b==""){
        text="Bạn chưa nhập chiều cao.";
        }
        else if (a<0&&b==""){
        text="Bạn nhập sai cân nặng. Bạn chưa nhập chiều cao.";
        }
        else if (a>0&&b<0){
            text="Bạn nhập sai chiều cao."
        }
        else if (a<0&&b>0){
            text="Bạn nhập sai cân nặng."
        }
        else if (a==""&&b<0){
        text="Bạn chưa nhập cân nặng. Bạn nhập sai chiều cao.";
        }else if (a==""&&b>0){
        text="Bạn chưa nhập cân nặng."
        }
        else if (bmi < 18.5){
        text ="BMI = "+ parseInt(bmi )+" Bạn thiếu cân.";
        }
        else if (bmi<25){
        text="BMI = "+ parseInt(bmi )+" Bạn bình thường.";
        }else if (bmi<30){
        text="BMI = "+ parseInt(bmi )+ " Bạn hơi béo.";
        }else{
        text="BMI = "+ parseInt(bmi )+ " Bạn béo phì.";
        }
    document.getElementById('output').innerHTML=text;
}