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
    public class MailTeacherToUserBL

    //object sender, EventArgs e
    {
        public static void mailSend(int CodeUserT, int CodeUserS, int codeLimit, int waitingId)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                try
                {

                    UseresDTO s = UseresDTO.ToUseresDTO(UsersDB.getUserById(CodeUserS));
                    UseresDTO t = UseresDTO.ToUseresDTO(UsersDB.getUserById(CodeUserT));
 

                    string Themessage = @"<html>
                          <body>
                            <table width=""50%"">
                            <tr>
                                <td style=""font-style='Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;'; color:blue; font-weight:bold"">
 <img src=cid:myImageID>
                               <h1>היי " + s.FName + @"!<h1/>
                               <h2>נכנסת בעבר לרשימת ההמתנה של בנק הזמן ללמוד   " + codeLimit + @"<h2/>

                               <h2>נמצאה בעבורך מורה ששמה   " + t.FName + " " + t.LName + @"<h2/>
                               <h2>שמסכימה ללמד אותך שיעור זה  " + "" + @"<h2/>

                               
                                <h3>לצורך קביעת השיעור בינכם עליך לפנות ל" + t.FName + @" בכתובת  " + t.Mail + " " + @"כדי לתאם תאריך שנוח לשתיכם <h3/>
                                 <h3>לסיום-לאחר שסיכמתם:<h3/>
                                 <h3>נותר לעדכן את התאריך במערכת!<h3/>
                                 <button style='background-color:aqua;font-size:x-large;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif'><a id='link' href='http://localhost:4200/ConfirmForWaiting/" + t.CodeUser + @"/" + s.CodeUser + @"/" + codeLimit+@"/"+ waitingId + @"'>עדכון במערכת!</a></button>
                                </td>
                            </tr>
                            </table>
                            </body>
                            </html>";
                    sendHtmlEmail("bankHazmanB@gmail.com", s.Mail.ToString(), Themessage, "Bank_Hazman", "נמצא התאמה לבקשת שיעור", "smtp.gmail.com", 25);
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
                LinkedResource theEmailImage = new LinkedResource("C: \\Users\\1\\Desktop\\לוגו בנק הזמן\\logo00.JPG");
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
