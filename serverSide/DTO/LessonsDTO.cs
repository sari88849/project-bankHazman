using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class LessonsDTO
    {
        public int CodeLesson { get; set; }
        public Nullable<int> CodeLimit { get; set; }
        public int CodeTeacher { get; set; }
        public Nullable<int> CodeStudent { get; set; }
        public Nullable<System.DateTime> DateLesson { get; set; }
        //DTOממיר ל
        public static LessonsDTO ToLessonsDTO(Lessons c)
        {
            LessonsDTO c1 = new LessonsDTO();
            c1.CodeLesson = c.CodeLesson;
            c1.CodeLimit = c.CodeLimit;
            c1.CodeTeacher = c.CodeTeacher;
            c1.CodeStudent = c.CodeStudent;
            c1.DateLesson = c.DateLesson;
            return c1;

        }
        //DALמחזיר
        public static Lessons ToLessons(LessonsDTO c)
        {
            Lessons c1 = new Lessons();
            c1.CodeLesson = c.CodeLesson;
            c1.CodeLimit = c.CodeLimit;
            c1.CodeTeacher = c.CodeTeacher;
            c1.CodeStudent = c.CodeStudent;
            c1.DateLesson = c.DateLesson;
            return c1;

        }
        public static List<Lessons> ToListLessons(List<LessonsDTO> listc)
        {
            List<Lessons> lc = new List<Lessons>();
            foreach (var item in listc)
            {
                lc.Add(ToLessons(item));
            }
            return lc;
        }
        public static List<LessonsDTO> ToListLessonsDTO(List<Lessons> listc)
        {
            List<LessonsDTO> lc = new List<LessonsDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToLessonsDTO(item));
            }
            return lc;
        }
    }
}


   