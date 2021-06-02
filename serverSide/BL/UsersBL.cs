using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class UsersBL
    {

        //שליפת רשימה
        public static List<UseresDTO> getUsers()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return UseresDTO.ToListUseresDTO(db.Useres.ToList());

            }

        }

        //עדכון
        public static bool update(UseresDTO u)
        {
            using (LoveToLerningEntities db= new LoveToLerningEntities())
            {
                UsersDB.update(UseresDTO.ToUseres(u));
                return true;
            }
        }

        //שליפה ע"פ קוד וסיסמא
        public static UseresDTO GetUsereByIdAndpass(string name, string pass)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return UseresDTO.ToUseresDTO(UsersDB.GetUsereByIdAndpass(name, pass));

            }
        }

        //הוספה
        public static bool AddUser(UseresDTO c)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                
                UsersDB.AddUser(UseresDTO.ToUseres(c));
                return true;
            }
        }
        //רשימת מורים ע"פ בקשות
        public static List<UseresDTO> getUserIsCorrect(int user, int sector, int min, Nullable<int> time, int codeLimit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return UseresDTO.ToListUseresDTO(UsersDB.getUserIsCorrect(user, sector, min, time, codeLimit));
            }
        }

        //פונקצייה שמחזירה את פרטי המשתשמש
        public static UseresDTO getUser(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return UseresDTO.ToUseresDTO(UsersDB.getUserById(id));
            }
        }

        //פונקצייה שמחשבת כמה בנים יש לי במערכת
        public static int  getMin1(int id)
        {
            using (LoveToLerningEntities db= new LoveToLerningEntities())
            {
                var q = 0;
                foreach (var item in db.Useres)
                {
                    if (item.Min == id)
                        q++;
                }
                return q;
            }
        }
        //פונקצייה- שלבינתיים לא השתמשתי
        public static int getMin2(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                var q = 0;
                foreach (var item in db.Useres)
                {
                    if (item.Min == id)
                        q++;
                }
                return q;
            }
        }

        //תגובות והמלצות
        public static List<RecommendationDTO> RecommendationText(int codeUser, int codeLim)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return RecommendationDTO.ToListRecommendationDTO(UsersDB.RecommendationText(codeUser, codeLim));

            }
        }

        public static UseresDTO getUserById(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return UseresDTO.ToUseresDTO(UsersDB.getUserById(id));

            }

        }

        public static UseresDTO getUserByDateAndMail(string em)
        {
            using (LoveToLerningEntities db= new LoveToLerningEntities())
            {
                return UseresDTO.ToUseresDTO(UsersDB.getUserByDateAndMail(em));
            }
        }




    }
}
