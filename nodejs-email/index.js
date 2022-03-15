const nodemailer = require('nodemailer');


let transport = nodemailer.createTransport({
    // host: "smtp.mailtrap.io",
    host: "smtp.gmail.com",
    // port: 2525,
    port: 587,
    secure: false,
    auth: {
        // user: "79e35788758a85",
        // pass: "89b1cae5909115"
        user: "rostyslav.makhmutov@abz.agency",
        pass: "dyP<6QTe1"
    }
},
{
    from: 'Mailer Test <rostyslav.makhmutov@abz.agency>',
});

const message = {
    from: 'rostyslav.makhmutov@abz.agency', // Sender address
    to: 'rostyslav.makhmutov@abz.agency',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!', // Plain text body
    html: "<!DOCTYPE html\n" +
        "        PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n" +
        "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n" +
        "<head>\n" +
        "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n" +
        "    <title>HTML Template</title>\n" +
        "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n" +
        "    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n" +
        "    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n" +
        "    <link href=\"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap\" rel=\"stylesheet\">\n" +
        "    <style>\n" +
        "        body {\n" +
        "            width: 100% !important;\n" +
        "            -webkit-text-size-adjust: 100%;\n" +
        "            -ms-text-size-adjust: 100%;\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "            line-height: 100%;\n" +
        "        }\n" +
        "\n" +
        "        [style*=\"Source Sans Pro\"] {\n" +
        "            font-family: 'Source Sans Pro', arial, sans-serif !important;\n" +
        "        }\n" +
        "\n" +
        "        img {\n" +
        "            outline: none;\n" +
        "            text-decoration: none;\n" +
        "            border: none;\n" +
        "            -ms-interpolation-mode: bicubic;\n" +
        "            max-width: 100% !important;\n" +
        "            margin: 0;\n" +
        "            padding: 0;\n" +
        "            display: block;\n" +
        "        }\n" +
        "\n" +
        "        table td {\n" +
        "            border-collapse: collapse;\n" +
        "        }\n" +
        "\n" +
        "        table {\n" +
        "            border-collapse: collapse;\n" +
        "            mso-table-lspace: 0pt;\n" +
        "            mso-table-rspace: 0pt;\n" +
        "        }\n" +
        "\n" +
        "        .info-title {\n" +
        "            font-size: 16px;\n" +
        "            line-height: 20px;\n" +
        "            font-weight: 400;\n" +
        "        }\n" +
        "\n" +
        "        .info-title-bold-td {\n" +
        "            padding-top: 12px;\n" +
        "            font-size: 12px;\n" +
        "            line-height: 15px;\n" +
        "            font-weight: 700;\n" +
        "        }\n" +
        "\n" +
        "        .info {\n" +
        "            font-size: 12px;\n" +
        "            line-height: 15px;\n" +
        "            font-weight: 400;\n" +
        "        }\n" +
        "\n" +
        "        .table-title {\n" +
        "            font-size: 16px;\n" +
        "            line-height: 20px;\n" +
        "            font-weight: 400;\n" +
        "        }\n" +
        "\n" +
        "        .table-title-bold-td {\n" +
        "            padding-top: 12px;\n" +
        "            font-size: 12px;\n" +
        "            line-height: 15px;\n" +
        "            font-weight: 700;\n" +
        "        }\n" +
        "\n" +
        "        .table-row {\n" +
        "            height: 30px;\n" +
        "            border: 1px solid #000000;\n" +
        "        }\n" +
        "\n" +
        "        .table-row-1 {\n" +
        "            font-size: 10px;\n" +
        "            line-height: 13px;\n" +
        "            width: 39px;\n" +
        "            text-align: center;\n" +
        "            padding-bottom: 1px;\n" +
        "            border-right: 1px solid #000000;\n" +
        "        }\n" +
        "\n" +
        "        .table-row-2 {\n" +
        "            font-size: 10px;\n" +
        "            line-height: 13px;\n" +
        "            width: 350px;\n" +
        "            padding-left: 14px;\n" +
        "            padding-bottom: 1px;\n" +
        "            border-right: 1px solid #000000;\n" +
        "        }\n" +
        "\n" +
        "        .table-row-3 {\n" +
        "            font-size: 10px;\n" +
        "            line-height: 13px;\n" +
        "            width: 45px;\n" +
        "            padding-left: 15px;\n" +
        "            padding-bottom: 1px;\n" +
        "            border-right: 1px solid #000000;\n" +
        "        }\n" +
        "\n" +
        "        .table-row-4 {\n" +
        "            font-size: 10px;\n" +
        "            line-height: 13px;\n" +
        "            width: 51px;\n" +
        "            padding-left: 15px;\n" +
        "            padding-bottom: 1px;\n" +
        "            border-right: 1px solid #000000;\n" +
        "        }\n" +
        "\n" +
        "        .table-row-5 {\n" +
        "            font-size: 10px;\n" +
        "            line-height: 13px;\n" +
        "            width: 51px;\n" +
        "            padding-left: 15px;\n" +
        "            padding-bottom: 1px;\n" +
        "        }\n" +
        "\n" +
        "        .bank-requisites-bold {\n" +
        "            font-size: 12px;\n" +
        "            line-height: 15px;\n" +
        "            font-weight: 700;\n" +
        "        }\n" +
        "\n" +
        "        .bank-requisites {\n" +
        "            font-size: 12px;\n" +
        "            line-height: 15px;\n" +
        "        }\n" +
        "    </style>\n" +
        "</head>\n" +
        "\n" +
        "<body style=\"margin: 0; padding: 0;\">\n" +
        "<div style=\"font-size:0px;font-color:#ffffff;opacity:0;visibility:hidden;width:0;height:0;display:none;\">Тестовое\n" +
        "    письмо\n" +
        "</div>\n" +
        "<table cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" bgcolor=\"#ffffff\">\n" +
        "    <tr>\n" +
        "        <td>\n" +
        "            <table class=\"main table-656\" cellpadding=\"0\" cellspacing=\"0\" width=\"656\" align=\"center\" bgcolor=\"#ffffff\">\n" +
        "                <tr>\n" +
        "                    <td height=\"40\" width=\"656\"></td>\n" +
        "                </tr>\n" +
        "                <tr>\n" +
        "                    <td>\n" +
        "                        <table class=\"container 576\" cellpadding=\"0\" cellspacing=\"0\" width=\"576\" align=\"center\">\n" +
        "                            <tr>\n" +
        "                                <td>\n" +
        "                                    <img height=\"44\" width=\"167\" src=\"./img/logo-task2.png\" alt=\"logo\">\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr>\n" +
        "                                <td height=\"36\" width=\"576\"></td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info-title\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td align=\"left\">\n" +
        "                                    Billing Information\n" +
        "                                </td>\n" +
        "                                <td align=\"right\" width=\"30%\"> <!-- Width of second td in this table-->\n" +
        "                                    Shipping Information\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info-title\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td class=\"info-title-bold-td\" align=\"left\">\n" +
        "                                    Rocket Media Group\n" +
        "                                </td>\n" +
        "                                <td class=\"info-title-bold-td\" align=\"right\">\n" +
        "                                    Tyler Durden\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td align=\"left\" style=\"padding-top: 4px\">\n" +
        "                                    Bulgaria, 21B Moskova Street Sofia\n" +
        "                                </td>\n" +
        "                                <td align=\"right\" style=\"padding-top: 4px\">\n" +
        "                                    Bulgaria, 24A Moskova Street Sofia\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td align=\"left\" style=\"padding-top: 4px\">\n" +
        "                                    75008 Sofia, Bulgaria\n" +
        "                                </td>\n" +
        "                                <td align=\"right\" style=\"padding-top: 4px\">\n" +
        "                                    email@gmail.com\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td align=\"left\" style=\"padding-top: 4px\">\n" +
        "                                    +1 415 555 1132\n" +
        "                                </td>\n" +
        "                                <td align=\"right\" style=\"padding-top: 4px\">\n" +
        "                                    +33 01 75 11 00 67\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td align=\"left\" style=\"padding-top: 4px\">\n" +
        "                                    +1 302 555 1132\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td align=\"left\" style=\"padding-top: 4px\">\n" +
        "                                    pupvote@gmail.com\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <tr class=\"info\"\n" +
        "                                style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                <td class=\"info-last-td\" align=\"left\" style=\"padding-top: 4px; padding-bottom: 32px\">\n" +
        "                                    pupvote.com\n" +
        "                                </td>\n" +
        "                            </tr>\n" +
        "                            <table class=\"container 576\" cellpadding=\"0\" cellspacing=\"0\" width=\"576\" align=\"center\">\n" +
        "                                <tr class=\"table-title\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td align=\"center\" style=\"padding-right: 2px;\">\n" +
        "                                        Invoice #045334234551\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr class=\"table-title\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td align=\"center\" style=\"padding-left: 4px;\">\n" +
        "                                        From Friday, 15 January 2021\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr class=\"table-title-bold-td\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td align=\"left\" style=\"padding-top: 11px;\">\n" +
        "                                        Vote for Pet\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                            </table>\n" +
        "                            <table class=\"container 576\" cellpadding=\"0\" cellspacing=\"0\" width=\"576\" align=\"center\">\n" +
        "                                <tr style=\"height: 8px\"></tr>\n" +
        "                                <tr class=\"table-row\"\n" +
        "                                    style=\"font-weight: 700; font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td class=\"table-row-1\">\n" +
        "                                        #\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-2\">\n" +
        "                                        Name\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-3\">\n" +
        "                                        Price\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-4\">\n" +
        "                                        Quantity\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-5\">\n" +
        "                                        Amount\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr class=\"table-row\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td class=\"table-row-1\">\n" +
        "                                        1\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-2\">\n" +
        "                                        Acquiring 100 votes to vote for animals\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-3\">\n" +
        "                                        $1.99\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-4\">\n" +
        "                                        2\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-5\">\n" +
        "                                        $3.98\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr class=\"table-row\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td class=\"table-row-1\">\n" +
        "                                        2\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-2\">\n" +
        "                                        Acquiring 300 votes to vote for animals\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-3\">\n" +
        "                                        $4.99\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-4\">\n" +
        "                                        1\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-5\">\n" +
        "                                        $4.99\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr class=\"table-row\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td class=\"table-row-1\">\n" +
        "                                        3\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-2\">\n" +
        "                                        Acquiring 500 votes to vote for animals\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-3\">\n" +
        "                                        $5.49\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-4\">\n" +
        "                                        1\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-5\">\n" +
        "                                        $5.49\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr class=\"table-row\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td class=\"table-row-1\">\n" +
        "                                        4\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-2\">\n" +
        "                                        Acquiring 1000 votes to vote for animals\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-3\">\n" +
        "                                        $9.99\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-4\">\n" +
        "                                        1\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-5\">\n" +
        "                                        $9.99\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr class=\"table-row\"\n" +
        "                                    style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                    <td class=\"table-row-1\">\n" +
        "                                        5\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-2\">\n" +
        "                                        Acquiring 2000 votes to vote for animals\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-3\">\n" +
        "                                        $18.99\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-4\">\n" +
        "                                        1\n" +
        "                                    </td>\n" +
        "                                    <td class=\"table-row-5\">\n" +
        "                                        $18.99\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr style=\"height: 20px\"></tr>\n" +
        "                            </table>\n" +
        "                            <table class=\"container 576\" cellpadding=\"0\" cellspacing=\"0\" width=\"576\" align=\"center\">\n" +
        "                                <tr>\n" +
        "                                    <td class=\"bank-requisites-bold\"\n" +
        "                                        style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro'; width: 431px\">\n" +
        "                                        Bank information\n" +
        "                                    </td>\n" +
        "                                    <td class=\"bank-requisites\" align=\"right\"\n" +
        "                                        style=\"padding-right: 6px; font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                        Subtotal\n" +
        "                                    </td>\n" +
        "                                    <td class=\"bank-requisites\" align=\"right\"\n" +
        "                                        style=\"font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                        $43.44\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr>\n" +
        "                                    <td class=\"bank-requisites\"\n" +
        "                                        style=\"padding-top: 4px; font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro'; width: 431px\">\n" +
        "                                        Credit Agricole Bank\n" +
        "                                    </td>\n" +
        "                                    <td class=\"bank-requisites\" align=\"right\"\n" +
        "                                        style=\"padding-top: 4px; padding-right: 6px;  font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                        Tax (10%)\n" +
        "                                    </td>\n" +
        "                                    <td class=\"bank-requisites\" align=\"right\"\n" +
        "                                        style=\"padding-top: 4px; font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                        $4.35\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr>\n" +
        "                                    <td class=\"bank-requisites\"\n" +
        "                                        style=\"padding-top: 4px; font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro'; width: 431px\">\n" +
        "                                        IBAN: FR7630076021301193690023468\n" +
        "                                    </td>\n" +
        "                                    <td class=\"bank-requisites-bold\" align=\"right\"\n" +
        "                                        style=\"padding-top: 4px; padding-right: 6px;  font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                        Total\n" +
        "                                    </td>\n" +
        "                                    <td class=\"bank-requisites-bold\" align=\"right\"\n" +
        "                                        style=\"padding-top: 4px; font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro';\">\n" +
        "                                        $47.79\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                                <tr>\n" +
        "                                    <td class=\"bank-requisites\"\n" +
        "                                        style=\"padding-top: 4px; font-family: Arial, Helvetica, sans-serif, 'Source Sans Pro'; width: 431px\">\n" +
        "                                        SWIFT / BIC:AGRICOLERPP\n" +
        "                                    </td>\n" +
        "                                </tr>\n" +
        "                            </table>\n" +
        "                        </table>\n" +
        "                    </td>\n" +
        "                </tr>\n" +
        "            </table>\n" +
        "        </td>\n" +
        "    </tr>\n" +
        "</table>\n" +
        "</body>\n" +
        "\n" +
        "</html>"
    // attachments: [
    //     {
    //         filename: 'task2',
    //         path: '/Users/abz/WebstormProjects/new_project/src/PDF/task2.html',
    //         cid: 'task2'
    //     }
    // ]
};

transport.sendMail(message, function (err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log(info);
    }
});