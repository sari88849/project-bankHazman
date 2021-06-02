using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class LimitToTeacherBL
    {
        //הוספת תחום
        public static bool AddLimitToTeacher(LimitToTeacherDTO l)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                LimitToTeacherDB.AddLimitToTeacher(LimitToTeacherDTO.ToLimitToTeacher(l));
                return true;
            }
        }

        public static LimitToTeacherDTO getLimitToTeacher(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LimitToTeacherDTO.ToLimitToTeacherDTO(LimitToTeacherDB.getLimitToTeacher(limit));

            }

        }
        

            public static LimitToTeacherDTO getLimitByidAndTeacher(int limit, int teacher)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LimitToTeacherDTO.ToLimitToTeacherDTO(LimitToTeacherDB.getLimitByidAndTeacher(limit, teacher));

            }

        }

        //שליפה ע"פ קוד וסיסמא
        public static LimitToTeacherDTO GetUsereByIdAndpass(int limit, int teacher)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LimitToTeacherDTO.ToLimitToTeacherDTO(LimitToTeacherDB.GetUsereByIdAndpass(limit, teacher));

            }
        }

       



    }
}
