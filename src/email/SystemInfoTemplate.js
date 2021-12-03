const systemInfoTemplate = (employeeId, name, system, cpu, osInfo, diskLayout, bitdefender, ipAddr, ram) => `
    <head>
        <style>
            /*//////////////////////////////////////////////////////////////////
            [ FONT ]*/


            @font-face {
            font-family: OpenSans-Regular;
            src: url('../fonts/OpenSans/OpenSans-Regular.ttf'); 
            }



            /*//////////////////////////////////////////////////////////////////
            [ RESTYLE TAG ]*/
            * {
                margin: 0px; 
                padding: 0px; 
                box-sizing: border-box;
            }

            body, html {
                height: 100%;
                font-family: sans-serif;
            }

            /* ------------------------------------ */
            a {
                margin: 0px;
                transition: all 0.4s;
                -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            }

            a:focus {
                outline: none !important;
            }

            a:hover {
                text-decoration: none;
            }

            /* ------------------------------------ */
            h1,h2,h3,h4,h5,h6 {margin: 0px;}

            p {margin: 0px;}

            ul, li {
                margin: 0px;
                list-style-type: none;
            }


            /* ------------------------------------ */
            input {
            display: block;
                outline: none;
                border: none !important;
            }

            textarea {
            display: block;
            outline: none;
            }

            textarea:focus, input:focus {
            border-color: transparent !important;
            }

            /* ------------------------------------ */
            button {
                outline: none !important;
                border: none;
                background: transparent;
            }

            button:hover {
                cursor: pointer;
            }

            iframe {
                border: none !important;
            }




            /*//////////////////////////////////////////////////////////////////
            [ Utiliti ]*/






            /*//////////////////////////////////////////////////////////////////
            [ Table ]*/

            .limiter {
            width: 100%;
            margin: 10px auto;
            }

            .container-table100 {
            width: 100%;
            min-height: 100vh;
            background: #c850c0;
            background: -webkit-linear-gradient(45deg, #4158d0, #c850c0);
            background: -o-linear-gradient(45deg, #4158d0, #c850c0);
            background: -moz-linear-gradient(45deg, #4158d0, #c850c0);
            background: linear-gradient(45deg, #4158d0, #c850c0);

            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            padding: 33px 30px;
            }

            .wrap-table100 {
            width: 1170px;
            }

            table {
            border-spacing: 1;
            border-collapse: collapse;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            width: 100%;
            margin: 10px auto;
            position: relative;
            }
            table * {
            position: relative;
            }
            table td, table th {
            padding-left: 8px;
            }
            table thead tr {
            height: 60px;
            background: #36304a;
            }
            table tbody tr {
            height: 50px;
            }
            table tbody tr:last-child {
            border: 0;
            }
            table td, table th {
            text-align: left;
            }
            table td.l, table th.l {
            text-align: right;
            }
            table td.c, table th.c {
            text-align: center;
            }
            table td.r, table th.r {
            text-align: center;
            }


            .table100-head th{
            font-family: OpenSans-Regular;
            font-size: 18px;
            color: #fff;
            line-height: 1.2;
            font-weight: unset;
            }

            tbody tr:nth-child(even) {
            background-color: #f5f5f5;
            }

            tbody tr {
            font-family: OpenSans-Regular;
            font-size: 15px;
            color: #808080;
            line-height: 1.2;
            font-weight: unset;
            }

            tbody tr:hover {
            color: #555555;
            background-color: #f5f5f5;
            cursor: pointer;
            }

            .column1 {
            width: 260px;
            // padding-left: 40px;
            text-align:center;
            }

            .column2 {
            width: 260px;
            text-align:center;
            }

            .column3 {
            width: 245px;
            text-align:center;
            }

            .column4 {
            width: 200px;
            text-align:center;
            }

            .column5 {
            width: 170px;
            text-align:center;
            }

            .column6 {
            width: 222px;
            text-align:center;
            // text-align: right;
            // padding-right: 62px;
            }

            .column7 {
                width: 200px;
                text-align:center;
            }

            .column8 {
                width: 200px;
                text-align:center;
            }


            @media screen and (max-width: 992px) {
            table {
                display: block;
            }
            table > *, table tr, table td, table th {
                display: block;
            }
            table thead {
                display: none;
            }
            table tbody tr {
                height: auto;
                padding: 37px 0;
            }
            table tbody tr td {
                padding-left: 40% !important;
                margin-bottom: 24px;
            }
            table tbody tr td:last-child {
                margin-bottom: 0;
            }
            table tbody tr td:before {
                font-family: OpenSans-Regular;
                font-size: 14px;
                color: #999999;
                line-height: 1.2;
                font-weight: unset;
                position: absolute;
                width: 40%;
                left: 30px;
                top: 0;
            }
            table tbody tr td:nth-child(1):before {
                content: "Date";
            }
            table tbody tr td:nth-child(2):before {
                content: "Order ID";
            }
            table tbody tr td:nth-child(3):before {
                content: "Name";
            }
            table tbody tr td:nth-child(4):before {
                content: "Price";
            }
            table tbody tr td:nth-child(5):before {
                content: "Quantity";
            }
            table tbody tr td:nth-child(6):before {
                content: "Total";
            }

            .column4,
            .column5,
            .column6 {
                text-align: left;
            }

            .column4,
            .column7,
            .column8,
            .column5,
            .column6,
            .column1,
            .column2,
            .column3 {
                width: 100%;
            }

            tbody tr {
                font-size: 14px;
            }
            }

            @media (max-width: 576px) {
            .container-table100 {
                padding-left: 15px;
                padding-right: 15px;
            }
            }
        </style>
    </head>
    <div style="
        border-radius: 5px;
        padding: 7% 3%;
    ">
        <h1>Device Information for [${employeeId}] ${name}</h1>
        <p> IP Address : ${ipAddr}</p>
        <div class="limiter">
            <div class="table100">
                <table>
                    <thead>
                        <tr class="table100-head">
                            <th class="column1">MANUFACTURER</th>
                            <th class="column2">MODEL</th>
                            <th class="column3">S/N</th>
                            <th class="column4">BRAND</th>
                            <th class="column5">RAM</th>
                            <th class="column6">OS</th>
                            <th class="column7">DISK</th>
                            <th class="column8">BITDEFENDER</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="column1">${system.manufacturer}</td>
                            <td class="column2">${system.model}</td>
                            <td class="column3">${system.serial}</td>
                            <td class="column4">${cpu.brand}</td>
                            <td class="column5">${ram} GB</td>
                            <td class="column6">${osInfo.distro}</td>
                            <td class="column7">${diskLayout}</td>
                            <td class="column8">${bitdefender}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            
        </div>
    </div>
`

module.exports = { systemInfoTemplate }