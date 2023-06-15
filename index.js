const precioTicket=200;

    function resumen() {
        let cantidadTicket=document.getElementById('inputCantidad').value;
        let descuento=document.getElementById('inputCategoria').value;
        let precio=cantidadTicket * (precioTicket - ((precioTicket * descuento)/100));
        document.getElementById('compraTotal').value= 'Total a pagar: $ '+precio;
    }
