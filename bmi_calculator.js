const height=document.querySelector("#inp1");
const weight=document.querySelector("#inp2");
const bmi_value=document.querySelector("#bmi-id");
const bmi_status=document.querySelector("#bmi-status");

const calculate_bmi=()=>{
    if(height.value==="" || weight.value==="")
    {
        alert("Please first enter your height and weight");
        return;
    }
    else{
        let height_value=height.value;
        let weight_value=weight.value;
        let height_value_meter=height.value/100;
        let bmi=weight_value/(height_value_meter*height_value_meter);
        bmi=bmi.toFixed(2);
        bmi_value.textContent=bmi;
        if(bmi<=18.4)
        {
            bmi_status.textContent="Underweight";
        }
        else if(bmi>=18.5 && bmi<=24.9)
        {
            bmi_status.textContent="Normal";
        }
        else if(bmi>=25 && bmi<=29.9)
        {
            bmi_status.textContent="Overweight";
        }
        else if(bmi>=30 && bmi<=34.9)
        {
            bmi_status.textContent="Obese";
        }
        
    }
};
