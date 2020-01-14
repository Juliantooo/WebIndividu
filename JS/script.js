$(document).ready(function() {
	// Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $label = $this.parent().find("label");
					
						switch(e.type) {
							case 'keyup': {
								 $label.toggleClass('js-hide-label', $this.val() == '');
							} break;
							case 'blur': {
								if( $this.val() == '' ) {
                    $label.addClass('js-hide-label');
                } else {
                    $label.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
							} break;
							case 'focus': {
								if( $this.val() !== '' ) {
                    $label.removeClass('js-unhighlight-label');
                }
							} break;
							default: break;
						}
					
        });
    } 
});


const Barang =[
    {
        'Nama' : 'Canon EOS M100',
        'Harga' : 160000,
        'kode' : 1,
        'kodeName' : 'Mirorless',
        'Gambar' : '../Asset/images/CANON EOS M100.jpg',
        'promo' : true,
        'New' : false
    },
    {
        'Nama' : 'Go Pro Hero 4 Session',
        'Harga' : 150000,
        'kode' : 2,
        'kodeName' : 'Action',
        'Gambar' : '../Asset/images/go pro hero 4 session.jpeg',
        'promo' : false,
        'New' : false
    },
    {
        'Nama' : 'Go pro Hero 7',
        'Harga' : 160000,
        'kode' : 3,
        'kodeName' : 'Action',
        'Gambar' : '../Asset/images/go pro hero 7.jpg',
        'promo' : false,
        'New' : false
    },
    {
        'Nama' : 'Sony A6000',
        'Harga' : 150000,
        'kode' : 4,
        'kodeName' : 'Action',
        'Gambar' : '../Asset/images/Mirrorless Sony A6000.jpg',
        'promo' : false,
        'New' : true
    },
    {
        'Nama' : 'Canon Eos 200D kit',
        'Harga' : 150000,
        'kode' : 5,
        'kodeName' : 'DSLR',
        'Gambar' : '../Asset/images/Canon Eos 200d kit.jpg',
        'promo' : false,
        'New' : false
    },
    {
        'Nama' : 'Yi Cam',
        'Harga' : 160000,
        'kode' : 6,
        'kodeName' : 'Action',
        'Gambar' : '../Asset/images/yi cam.jpg',
        'promo' : true,
        'New' : false
    },
    {
        'Nama' : 'Nikon D3200',
        'Harga' : 170000,
        'kode' : 7,
        'kodeName' : 'DSLR',
        'Gambar' : '../Asset/images/Nikon-D3200.jpg',
        'promo' : false,
        'New' : false
    },
    {
        'Nama' : 'Nikon J5',
        'Harga' : 160000,
        'kode' : 8,
        'kodeName' : 'Mirorless',
        'Gambar' : '../Asset/images/Nikon J5.jpg',
        'promo' : false,
        'New' : false
    },
    {
        'Nama' : 'Nikon D3400',
        'Harga' : 150000,
        'kode' : 9,
        'kodeName' : 'DSLR',
        'Gambar' : '../Asset/images/Nikon D3400.jpg',
        'promo' : true,
        'New' : true
    },
    {
        'Nama' : 'Sony 55-210MM F4.5-6.3',
        'Harga' : 140000,
        'kode' : 10,
        'kodeName' : 'Lensa',
        'Gambar' : '../Asset/images/Sony 55-210MM F4.5-6.3 OSS.jpg',
        'promo' : true,
        'New' : false
    },
    {
        'Nama' : '7Artisans 35mm F1.2',
        'Harga' : 140000,
        'kode' : 11,
        'kodeName' : 'Lensa',
        'Gambar' : '../Asset/images/7Artisans 35mm F1.2.jpg',
        'promo' : false,
        'New' : true

    }
]





    let total = 0;
    const namaBarang=[];
    let a=[];
    

    $('.checked').each(function () {
        $(this).click(()=>{
            getBarang(this.value)
        })
    })

const getBarang = (barang)=>{
    for (i in Barang) {
        //json[i] is your current object inside the array, {"DisplayName":"Answer Number 1","Value":"Answer1","Option":"True"}
        for (key in Barang[i]) {
        // keys are DisplayName,  Value, Option
         // console.log( key ,Barang[i][key]); // instead of writing object.key you can also write object[key]
            if(barang==Barang[i].kode){
                namaBarang.push(Barang[i].Nama)
                if(Barang[i].promo==true){
                    Barang[i].Harga*0.2
                }
                total+=Barang[i].Harga
                break;
            }
        }
        
    }

}



$('#buatpesanan').click((e)=>{
    e.preventDefault()
    $('#nama').append($('#name').val())
    $('#imail').append($('#email').val())
    $('#alamat').append($('#subject').val())
    $('#barang').append(namaBarang.join('  -- '))
    $('#harga').append(total)
    $('#catatan').append($('#message').val())

})