 function addProduto(){
    document.getElementById("sacolaContador").innerHTML = parseInt(document.getElementById("sacolaContador").innerHTML) +1;
    alert(`O item foi adicionado à sacola.`)
}

//produto1
let produto1 = JSON.parse('[{"nome":"CAMISETA MESCLA","preco":"28,00","foto": "imagens/img_2.png", "cor":"cinza"}]')
produto1.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto1">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 3x de R$ 9,33"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})
//produto2
let produto2 = JSON.parse('[{"nome":"SAIA EM COURO","preco":"398,00","foto": "imagens/img_3.png"}]')
produto2.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto2">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$`+produtos.preco+`</h3>
            <p>`+"até 5x de R$ 30,00"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>    
    </div>
    `
})

//produto3
let produto3 = JSON.parse('[{"nome":"CARDIGAN TIGRE","preco":"398,00","foto": "imagens/img_4.png"}]')
produto3.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto3">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 3x de R$ 30,00"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})

//produto4
let produto4 = JSON.parse('[{"nome":"CARDIGAN OFF WHITE","preco":"99,90","foto": "imagens/img_5.png"}]')
produto4.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto4">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 3x de R$ 33,30"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})

//produto5
let produto5 = JSON.parse('[{"nome":"BODY LEOPARDO","preco":"129,90","foto": "imagens/img_6.png"}]')
produto5.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto5">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 3x de R$ 43,43"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})

//produto6
let produto6 = JSON.parse('[{"nome":"CASACO PELOS","preco":"398,00","foto": "imagens/img_7.png"}]')
produto6.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto6">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 5x de R$ 30,00"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})

//produto7
let produto7 = JSON.parse('[{"nome":"CROPPED STRIPES","preco":"120,00","foto": "imagens/img_8.png"}]')
produto7.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto7">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 3x de R$ 40,00"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})

//produto8
let produto8 = JSON.parse('[{"nome":"CAMISA TRANSPARENTE","preco":"398,00","foto": "imagens/img_9.png"}]')
produto8.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto8">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 5x de R$ 30,00"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})

//produto9
let produto9 = JSON.parse('[{"nome":"POCHETE CLUTCH","preco":"99,00","foto": "imagens/img_10.png"}]')
produto9.forEach(function(produtos){
    let containerProduto = document.getElementById("produtos")
    containerProduto.innerHTML+= `
    <div class="card">
        <div class="produto9">
            <img src="`+produtos.foto+`"/>
            <h3>`+produtos.nome+`</h3>
            <h2>R$ `+produtos.preco+`</h3>
            <p>`+"até 3x de R$ 33,00"+`</p>
            <button onclick="addProduto()">`+"COMPRAR"+`</button>
        </div>
    </div>
    `
})



//amarelo
$(function(){
    $('#amarelo').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto3').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

//azul
$(function(){
    $('#azul').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto3').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

//branco
$(function(){
    $('#branco').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto7').hide()
            $('.produto8').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto3').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto7').show()
            $('.produto8').show()
        }
    })
})

//cinza
$(function(){
    $('#cinza').change(function(){
        if(this.checked){
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto7').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto2').show()
            $('.produto3').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto7').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

//laranja
$(function(){
    $('#laranja').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto7').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto7').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

//vermelho
$(function(){
    $('#vermelho').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto7').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto7').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

//verde
$(function(){
    $('#verde').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto3').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

// PREÇO

//de o a 50
$(function(){
    $('#de0a50').change(function(){
        if(this.checked){
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto7').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto2').show()
            $('.produto3').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto7').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

//de 51 a 150
$(function(){
    $('#de51a150').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto6').hide()
            $('.produto8').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto3').show()
            $('.produto6').show()
            $('.produto8').show()
        }
    })
})

//de 151 300
$(function(){
    $('#de151a300').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto2').hide()
            $('.produto3').hide()
            $('.produto4').hide()
            $('.produto5').hide()
            $('.produto6').hide()
            $('.produto7').hide()
            $('.produto8').hide()
            $('.produto9').hide()
        }else{
            $('.produto1').show()
            $('.produto2').show()
            $('.produto3').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto6').show()
            $('.produto7').show()
            $('.produto8').show()
            $('.produto9').show()
        }
    })
})

//de 301 e 500
$(function(){
    $('#de301a500').change(function(){
        if(this.checked){
            $('.produto1').hide()
            $('.produto4').hide()
            $('.produto5').hide()   
            $('.produto7').hide()
            $('.produto9').hide()
        }else{
            $('.produto1').show()
            $('.produto4').show()
            $('.produto5').show()
            $('.produto7').show()
            $('.produto9').show()
        }
    })
})

//de 01
$(function(){
    $('#de01').change(function(){
        if(this.checked){

        }else{

        }
    })
})

// Clear
$(document).ready(function(){
    $(".limparFiltro").click(function(){
        $("#amarelo").prop("checked", false)
        $("#azul").prop("checked", false)
        $("#branco").prop("checked", false)
        $("#cinza").prop("checked", false)
        $("#laranja").prop("checked", false)
        $("#vermehlo").prop("checked", false)
        $("#verde").prop("checked", false)

        $("#de0a50").prop("checked", false)
        $("#de51a150").prop("checked", false)
        $("#de151a300").prop("checked", false)
        $("#de301a500").prop("checked", false)
        $("#de01").prop("checked", false)

        $('.produto1').show()
        $('.produto2').show()
        $('.produto3').show()
        $('.produto4').show()
        $('.produto5').show()
        $('.produto6').show()
        $('.produto7').show()
        $('.produto8').show()
        $('.produto9').show()
    })
})