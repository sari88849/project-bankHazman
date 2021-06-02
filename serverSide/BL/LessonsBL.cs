using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class LessonsBL
    {
        //מקבל קוד בנ"א ובודק אם הוא הבנ"א שלמד או לימד
        //השיעורים שלמדתי
        public static List<LessonsDTO> INotLearn(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LessonsDTO.ToListLessonsDTO(LessonsDB.INotLearn(id));

            }

        }
        //השיעורים שלימדתי
        public static List<LessonsDTO> ILearn()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LessonsDTO.ToListLessonsDTO(LessonsDB.ILearn());
            }
        }

        //public static List<LessonsDTO> ILearn(int id)
        //{
        //    using (LoveToLerningEntities db = new LoveToLerningEntities())
        //    {
        //        return LessonsDTO.ToListLessonsDTO(LessonsDB.ILearn(id));
        //    }
        //}

        //הוספת שיעור
        public static bool AddLesson(LessonsDTO l)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                LessonsDB.AddLesson(LessonsDTO.ToLessons(l));
                return true;
            }
        }

        //הפונקצייה הזו סופרת כמה שיעורים כל מורה לימדה
        public static int countLesson(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                var d = db.Lessons.ToList().Where(x => x.CodeTeacher == id).Count();
                return d;
            }
        }
        //פונקצייה המוצאת את כמות השיעורים שלימדתי
        public static int getLessonITeach(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                var q = 0;
                foreach (var item in db.Lessons)
                {
                    if (item.CodeTeacher == id)
                        q++;
                }
                return q;
            }
        }

        public static List<LessonsDTO> GetAllById(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LessonsDTO.ToListLessonsDTO(LessonsDB.GetAllByID(id));

            }

        }


    }
}
