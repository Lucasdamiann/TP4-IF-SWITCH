/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/*
function CalcularPrecio() {
    let precio = 35;
    let cantidad;
    let marca;
    let descuento;
    let pxc;
    let IIBB;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    pxc = precio * cantidad;
    IIBB=0

    if (cantidad >=6) {
        descuento = pxc * 0.5;
    } else if (cantidad == 5) {
        if (marca == "ArgentinaLuz") {
            descuento = pxc * 0.6;
        } else {
            descuento = pxc * 0.7;
        }
    } else if (cantidad == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            descuento = pxc * 0.75;
        }
        else {
            descuento = pxc * 0.8;
        }
    } else if (cantidad == 3) {
        if (marca == "ArgentinaLuz") {
            descuento = pxc * 0.85;
        } else if (marca == "FelipeLamparas") {
            descuento = pxc * 0.9;
        } else {
            descuento = pxc * 0.95;
        }
    } else if (cantidad <= 2) {
        descuento = pxc;

    } if (descuento >= 120) {
        IIBB = descuento * 0.1
        alert("Pagó $ " + descuento.toFixed(2) + " y " + (IIBB).toFixed(2) + " de IIBB")
    }
    document.getElementById("txtIdprecioDescuento").value = (descuento + IIBB).toFixed(2);

}
*/
function CalcularPrecio() {
    let precio = 35;
    let cantidad;
    let marca;
    let descuento;
    let pxc;
    let IIBB;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    pxc = precio * cantidad;
    IIBB = 0
    descuento = pxc
    if (cantidad >= 3) {

        switch (cantidad) {

            case 3:
                if (marca == "ArgentinaLuz") {
                    descuento = pxc * 0.85
                } else if (marca == "FelipeLamparas") {
                    descuento = pxc * 0.90
                } else {
                    descuento = pxc * 0.95
                }
                break;
            case 4:
                if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                    descuento = pxc * 0.75
                }
                else {
                    descuento = pxc * 0.8
                }
                break;
            case 5:
                if (marca == "ArgentinaLuz") {
                    descuento = pxc * 0.6
                }
                else {
                    descuento = pxc * 0.7
                }
                break;
            default:
                descuento = pxc * 0.5;
                break;
        }
        
        }
        if (descuento >= 120) {
            IIBB = descuento * 0.1
            alert("Pagó $ " + descuento.toFixed(2) + " y " + (IIBB).toFixed(2) + " de IIBB")    
        
    }
    document.getElementById("txtIdprecioDescuento").value = (descuento + IIBB).toFixed(2);

}
