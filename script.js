       function hitung() {
            let pelanggan = document.getElementById("pelanggan").value;
            let produk = document.getElementById("produk").value;
            let harga = document.getElementById("harga").value;
            let jumlah = document.getElementById("jumlah").value;

            if (pelanggan == "" || produk == "" || harga == "" || jumlah == "") {
                alert("Semua input wajib diisi!");
                return;
            }

            harga = parseInt(harga);
            jumlah = parseInt(jumlah);

            let totalBelanja = harga * jumlah;
            let potongan = 0;

            if (totalBelanja >= 400000) {
                potongan = 50000;
            }

            let totalBayar = totalBelanja - potongan;

            document.getElementById("hasil").innerHTML = `
                <table>
                    <tr>
                        <td>Nama Pelanggan</td>
                        <td>${pelanggan}</td>
                    </tr>
                    <tr>
                        <td>Nama Produk</td>
                        <td>${produk}</td>
                    </tr>
                    <tr>
                        <td>Total Belanja</td>
                        <td>Rp ${totalBelanja}</td>
                    </tr>
                    <tr>
                        <td>Potongan</td>
                        <td>Rp ${potongan}</td>
                    </tr>
                    <tr>
                        <td>Total Bayar</td>
                        <td>Rp ${totalBayar}</td>
                    </tr>
                </table>
            `;
    }

            function resetForm() {
            document.getElementById("pelanggan").value = "";
            document.getElementById("produk").value = "";
            document.getElementById("harga").value = "";
            document.getElementById("jumlah").value = "";
            document.getElementById("hasil").innerHTML = "";
}