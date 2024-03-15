function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hobby.value;

    let input = 'Selamat Pagi ' + nama + 
    '<br> Pekerjaan ' + pekerjaan +
    '<br> Hobby ' + hobby;

    let no_input = 'Maaf Nama, Pekerjaan dan Hobby Anda Belum Terisi!!';
    let hasil = nama && pekerjaan && hobby !='' ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
    
}