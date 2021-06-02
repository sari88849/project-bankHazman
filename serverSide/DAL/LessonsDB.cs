using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class LessonsDB
    {
        //הוספה מחיקה עדכון שעור- הפיכתו לפעיל
        //השיעורים שלמדתי
        public static List<Lessons> INotLearn(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Lessons.Where(u => u.CodeStudent == id).ToList();
            }

        }
        //השיעורים שלימדתי
        public static List<Lessons> ILearn()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Lessons.ToList();
            }
        }

        //public static List<Lessons> ILearn(int id)
        //{
        //    using (LoveToLerningEntities db = new LoveToLerningEntities())
        //    {
        //        return db.Lessons.Where(u => u.CodeTeacher == id).ToList();
        //    }
        //}


        public static bool AddLesson(Lessons l)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                db.Lessons.Add(l);
                db.SaveChanges();
                return true;
            }
        }

        public static List<Lessons> GetAllByID(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Lessons.Where(u => u.CodeStudent == id || u.CodeTeacher == id).ToList();
            }

        }

    }
}
