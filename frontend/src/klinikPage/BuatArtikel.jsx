import React from "react";
import SidebarKlinik from '../components/sidebarKlinik';

function BuatArtikel() {
    return (
        <SidebarKlinik>
                <div className=" h-100" style={{minWidth: "1200px"}}>
                <form>
                    <div className="mb-3">
                        <h3>Buat Artikel</h3>
                    </div>
                    <div class="mb-3">
                        <label for="author" class="form-label">Penulis</label>
                        <input type="email" class="form-control" id="author" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label">Judul</label>
                        <input type="password" class="form-control" id="title"/>
                    </div>
                    <div class="mb-3">
                        <label for="header" class="form-label">Deskripsi</label>
                        <input type="password" class="form-control" id="header"/>
                    </div>
                    <div class="mb-3">
                        <label for="time" class="form-label">Waktu</label>
                        <input type="password" class="form-control" id="time"/>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">konten</label>
                        <textarea type="password" class="form-control" id="content"/>
                    </div>
                    <div class="mb-3">
                        <label for="gambar" class="form-label">Gambar</label>
                        <input type="file" class="form-control" id="gambar"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Konfirmasi</button>
                </form>
                </div>
            </SidebarKlinik>
    );
}

export default BuatArtikel;
