using System;
using System.Collections.Generic;
using System.Linq;

namespace DAL
{
    public class UsersDB
    {


        static LoveToLerningEntities DB = new LoveToLerningEntities();


        //מחזיר רשימת משתמשים
        public static List<Useres> GetAll()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Useres.ToList();
            }
        }

        //מחזיר עפ' קוד
        public static Useres GetUsereByIdAndpass(string name, string pass)
        {
            return DB.Useres.FirstOrDefault(u => u.FName + " " + u.LName == name && u.Password == pass);
        }
        //הוספה
        public static bool AddUser(Useres u)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                db.Useres.Add(u);
                db.SaveChanges();
                return true;
            }
        }
        //עדכון
        public static void update(Useres u)
        {
            var us = DB.Useres.FirstOrDefault(s => s.CodeUser == u.CodeUser);
            if (us != null)
            {
                us.FName = u.FName;
                us.LName = u.LName;
                us.Password = u.Password;
                us.DateOfBirth = us.DateOfBirth;
                us.Mail = u.Mail;
                us.Phone = u.Phone;
                us.CodeStreet = u.CodeStreet;
                us.CodeSector = u.CodeSector;
                us.Min = u.Min;
                us.AgeMin = u.AgeMin;
                us.AgeMax = u.AgeMax;
                us.AddressX = u.AddressX;
                us.AddressY = u.AddressY;
                us.MinToLearn = u.MinToLearn;

            }
            DB.SaveChanges();
        }


        //   מחיקה
        public static void DeleteUser(Useres u)
        {
            DB.Useres.Remove(u);
            DB.SaveChanges();
        }

      

        //מחזיר את המורים ע"פ הבקשות המתאימות
        public static List<Useres> getUserIsCorrect(int user, int sector, int min, Nullable<int> time, int codeLimit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                //צריך לסנן גם לפי זמן בוקר צהריים ערב וגם לפי תחומים למורים 
                //סינון לפי מין ומגזר
                var q = db.Useres.ToList();//Where(r => r.CodeUser == q1.IdUser);
                if (min == 3)
                {
                    q = db.Useres.Where(u => u.CodeSector == sector && u.CodeUser!=user).ToList();
                }
                else
                    q = db.Useres.Where(u => u.CodeSector == sector && u.Min == min && u.CodeUser!=user).ToList();
                //סינון לפי תחום
                q = q.Where(p => p.LimitToTeacher.Select(u => u.CodeLimit).Contains(codeLimit)).ToList();
                //סינון לפי זמן 
                q = q.Where(u => u.TimeToUser.Select(b => b.IdTime).Contains(time)).ToList();

                return q;
            }
        }


        //פונקציה שמחזירה את פרטי המשתמש לפי קוד
        public static Useres getUserById(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Useres.FirstOrDefault(u => u.CodeUser == id);
            }
        }

       

        //ספירה של כל הזכרים
        //public int getMin1(int id)
        //{
        //    using (LoveToLerningEntities db = new LoveToLerningEntities())
        //    {
        //        var q = db.Useres.Count(u => u.Min == id);
        //        return q;
        //    }
        //}

        //תגובות והמלצות
        public static List<Recommendation> RecommendationText(int codeUser, int codeLim)
        {
            using (LoveToLerningEntities db= new LoveToLerningEntities())
            {
                var q = db.LimitToTeacher.FirstOrDefault(a => a.CodeTeacher == codeUser && a.CodeLimit == codeLim);
                var q1 = db.Recommendation.Where(a => a.CodeLimitToTeacher == q.CodeLimitToTeacher).ToList();
                return q1;
            }
        }
        public static Useres getUserByDateAndMail(string em)
        {
            using (LoveToLerningEntities db= new LoveToLerningEntities())
            {
                return db.Useres.FirstOrDefault(a => a.Mail == em);
            }
        }
    }


}