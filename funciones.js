let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(let i=0; i<7; i++) {
    if(i==6){
        alert(`Hoy es ${dias[i]}!!! Llegaste al fin de la semana!`);
        console.log(`Hoy es ${dias[i]}!!! Llegaste al fin de la semana!`);
    } else if (i%2==0){
    alert(`El ${dias[i]} es dia par`)       
    console.log(`El ${dias[i]} es dia par`);
} else {
    alert(dias[i]);
    console.log(dias[i]);
}
}
