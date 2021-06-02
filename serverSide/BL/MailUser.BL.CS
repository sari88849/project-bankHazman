using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
using DAL;
using DTO;
using System.Net.Mime;

namespace BL
{
    public class MailBLUser

    //object sender, EventArgs e
    {
        public static void mailSendUser(string result,int email)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                try
                {

                    UseresDTO e = UseresDTO.ToUseresDTO(UsersDB.getUserById(email));
                    //                    MailMessage mail = new MailMessage();
                    //                    SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                    //                    mail.From = new MailAddress("bankHazmanB@gmail.com");
                    //                    UseresDTO s = UseresDTO.ToUseresDTO(UsersDB.getUserById(CodeUserS));
                    //                    UseresDTO t = UseresDTO.ToUseresDTO(UsersDB.getUserById(CodeUserT));
                    //                    string mailS = s.Mail;
                    //                    string mailT = t.Mail;
                    //                    mail.To.Add(mailT);
                    //                    //mail.To.Add("m0548408469@gmail.com");
                    //                    mail.Bcc.Add(mailT);
                    //                    //mail.Bcc.Add("m0548408469@gmail.com");
                    //                    mail.Subject = "בקשת שיעור";
                    //                    mail.IsBodyHtml = true;
                    //                    //Attachment att = new Attachment(@"C: \Users\דסי\Downloads\DSC04883.JPG");
                    //                    //att.ContentDisposition.Inline = true;
                    //                    //mail.Attachments.Add(att);


                    //                    //mail.Body = "תלמידה בשם "+s.FName+" "+s.LName+" מעוניינת לקבוע איתך שעור"+"sas@gmail.com";

                    //                    //                  < img src = 'assets/picture/log7.jpg' ></ img >


                    //                    //           < img src =http://localhost:4200/assets/picture/log7.jpg  ></ img >
                    //                    //< img src = 'C: \Users\1\Desktop\הפרויקט\17.פינקלשטיין ויהודה\MyProject1\BL\picture\log7.jpg' ></ img >


                    //                    string ht = @"<html>
                    //                    <body style='background-color:chartreuse'>
                    //                          <p style='background-color:orange;color:green; font-size:150% ;font-family:Calibri'>הודעה מבנק הזמן</p>                       
                    //                       <p style='color: yellow; font-size:150% ;font-family:Calibri'>
                    //                            שלום ל  " + t.FName + " " + t.LName + " " + @" נמצאת מתאים ללמד את" + " " + s.FName + " " + s.LName + @"<br/>לצורך קביעת השיעור פנה לתלמידך בכתובת<br/>" + s.Mail + @"<br/>וקבעו את התאריך המוסכם על שניכם<br/> 
                    //                          <img src=cid:'https:\\i.picsum.photos\\id\\867\\700\\400.jpg?hmac=X6ch0iZCUs99K4xsFyBW06KCbRmJUKwogKhqkhwt0jA'/>
                    //<h1>picccccccccccc<h1/>

                    //                        </p><br/> 
                    //                         <button><a id='link' href='http://localhost:4200/ConfirmForm/" + t.CodeUser + @"/" + s.CodeUser + @"/" + codeLimit + @"'>לסיום ולקביעת התאריך לאחר סיכום עם התלמיד</a></button>
                    //                    </body>

                    //                    </html>
                    //                    ";

                    //                    // < input type = 'date' id = 'date1' onchange = 'document.getElementById('link').href+=document.getElementById('date1').value' >
                    //                    mail.Body = ht;
                    //                    AlternateView htmlView = AlternateView.CreateAlternateViewFromString(mail.Body,null, "text/html");
                    //                    LinkedResource theEmailImage = new LinkedResource("C: \\Users\\דסי\\Downloads\\DSC04883.JPG");
                    //                    theEmailImage.ContentId = "myImageID";
                    //                    htmlView.LinkedResources.Add(theEmailImage);



                    //                    SmtpServer.Port = 587;
                    //                    SmtpServer.Credentials = new System.Net.NetworkCredential("bankHazmanB@gmail.com", "BANK12345");
                    //                    SmtpServer.EnableSsl = true;

                    //                    SmtpServer.Send(mail);


                    string Themessage = @"<html>
                          <body>
                            <table width=""50%"">
                            <tr>
                                <td style=""font-style:arial; color:blue; font-weight:bold"">
                               <h1>הי<h1/>
<h2>   שלחנו עבורכם סיסמא חדשה- שתעזור לכם להיכנס למערכת- הסיסמא היא "+ result +@"<h2/>
<h2>לאחר הכניסה למערכת באפשרותכם לשנות את הסיסמא באזור האישי  <h2/>
                                
                            </table>
                            </body>
                            </html>";
                    sendHtmlEmail("bankHazmanB@gmail.com", e.Mail.ToString(), Themessage, "Bank_Hazman", "סיסמא זמנית", "smtp.gmail.com", 25);






                }
                catch (Exception e)
                {
                    throw e;
                }


            }
            void sendHtmlEmail(string from_Email, string to_Email, string body, string from_Name, string Subject, string SMTP_IP, Int32 SMTP_Server_Port)
            {
                //create an instance of new mail message
                MailMessage mail = new MailMessage();

                //set the HTML format to true
                mail.IsBodyHtml = true;

                //create Alrternative HTML view
                AlternateView htmlView = AlternateView.CreateAlternateViewFromString(body, null, "text/html");

                //Add Image
                LinkedResource theEmailImage = new LinkedResource("C: \\Users\\1\\Desktop\\לוגו בנק הזמן\\log7.JPG");
                //C: \Users\1\Desktop\לוגו בנק הזמן
                theEmailImage.ContentId = "myImageID";

                //Add the Image to the Alternate view
                htmlView.LinkedResources.Add(theEmailImage);

                //Add view to the Email Message
                mail.AlternateViews.Add(htmlView);

                //set the "from email" address and specify a friendly 'from' name
                mail.From = new MailAddress(from_Email, from_Name);

                //set the "to" email address
                mail.To.Add(to_Email);

                //set the Email subject
                mail.Subject = Subject;

                //set the SMTP info
                System.Net.NetworkCredential cred = new System.Net.NetworkCredential("bankHazmanB@gmail.com", "BANK12345");
                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
                smtp.EnableSsl = true;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = cred;
                //send the email
                smtp.Send(mail);
            }
        }


    }
}
