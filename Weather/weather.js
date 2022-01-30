
async function timkiem()
{
    var search=document.querySelector('#search');
    var kq=xoa_dau(search.value);
    let vitri=kq.trim();
    console.log(vitri);
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${vitri}&appid=9676e0e21bd4cdf269b6408184fa97a6`;
    let data= await fetch(api).then(res=> res.json());
    if(data.cod==="404")
    {
        changeWeather();
    }else{
    console.log(data);
    var city=document.querySelector('.city');
    var country=document.querySelector('.country');
    var nhietdo=document.querySelector('.nhietdo');
    var chitiet_s=document.querySelector('.chitiet_s');
    var chitiet_v=document.querySelector('.chitiet_v');
    var chitiet_sun=document.querySelector('.chitiet_sun');
    var trangthai=document.querySelector('.trangthai');
    var time=document.querySelector('.today');
    var body=document.querySelector('body');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    nhietdo.innerText=parseInt(data.main.temp-273.15);
    console.log(parseFloat(data.main.temp)-273.15);
    chitiet_s.innerText=data.visibility;
    chitiet_v.innerText=data.wind.speed;
    chitiet_sun.innerText=data.main.humidity;
    trangthai.innerText=data.weather[0]?data.weather[0].main:'';
    time.innerText= new Date().toLocaleString('vi');
    body.setAttribute('class','hot');
    if(parseInt(data.main.temp-273.15)<=25)
    {
        body.setAttribute('class','warm');
    }
    if(parseInt(data.main.temp-273.15)<=19)
    {
        body.setAttribute('class','cold');
    }
    }
}
async function changeWeather()
{
    let api=`https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=9676e0e21bd4cdf269b6408184fa97a6`;
    let data= await fetch(api).then(res=> res.json());
    var city=document.querySelector('.city');
    var country=document.querySelector('.country');
    var nhietdo=document.querySelector('.nhietdo');
    var chitiet_s=document.querySelector('.chitiet_s');
    var chitiet_v=document.querySelector('.chitiet_v');
    var chitiet_sun=document.querySelector('.chitiet_sun');
    var trangthai=document.querySelector('.trangthai');
    var time=document.querySelector('.today');
    var body=document.querySelector('body');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    nhietdo.innerText=parseInt(data.main.temp-273.15);
    console.log(parseFloat(data.main.temp)-273.15);
    chitiet_s.innerText=data.visibility;
    chitiet_v.innerText=data.wind.speed;
    chitiet_sun.innerText=data.main.humidity;
    trangthai.innerText=data.weather[0]?data.weather[0].main:'';
    time.innerText= new Date().toLocaleString('vi');
    body.setAttribute('class','hot');
    if(parseInt(data.main.temp-273.15)<=25)
    {
        body.setAttribute('class','warm');
    }
    if(parseInt(data.main.temp-273.15)<=19)
    {
        body.setAttribute('class','cold');
    }
}
var search=document.querySelector('#search');
function xoa_dau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
window.onload= function()
{
    changeWeather();
}