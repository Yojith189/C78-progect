var image=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg","https://img.pngio.com/grandmother-in-rocking-chairpng-arizona-department-of-economic-grandmother-png-400_300.png"];
var members=["My Family Book","Grandfather","Dad","Me","Sister","Mother","Grandmother"];
var count=0;
var j=7;
function Nextimg() {
    if(count==7){
        count=0;

    }

    document.getElementById("book").src= image[count];
    document.getElementById("names").innerHTML=members[count];
count++;

}
function Previousimg() {
    --j;
    
    if(j==0){
        j=7;

    }

    document.getElementById("book").src= image[count];
    document.getElementById("names").innerHTML=members[count];


}