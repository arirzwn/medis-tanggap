import React from "react";
import SidebarKlinik from '../components/sidebarKlinik';

function BuatRujukan() {
    return (
        <SidebarKlinik>
                <div className=" h-100" style={{minWidth: "1200px"}}>
                <form>
                    <div className="mb-3">
                        <h3>Buat Rujukan</h3>
                    </div>
                    <div class="mb-3">
                        <label for="author" class="form-label">Tujuan</label>
                        <input type="text" class="form-control" id="author" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label">Nama Pasien</label>
                        <input type="text" class="form-control" id="title"/>
                    </div>
                    <div class="mb-3 column">
                        <label for="jk" class="form-label">Jenis Kelamin</label>
                        <select name="jk" id="jk" className="form-control">
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="time" class="form-label">Tgl Lahir</label>
                        <input type="date" class="form-control" id="time"/>
                    </div>
                    <div class="mb-3">
                        <label for="time" class="form-label">Diagnosa</label>
                        <input type="text" class="form-control" id="time"/>
                    </div>
                    <div class="mb-3">
                        <label for="content" class="form-label">Keterangan</label>
                        <textarea type="text" class="form-control" id="content"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Konfirmasi</button>
                </form>
                </div>
            </SidebarKlinik>
    );
}

export default BuatRujukan;
