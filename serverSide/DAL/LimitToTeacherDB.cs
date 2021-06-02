using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class LimitToTeacherDB
    {
        //הוספה
        public static void AddLimitToTeacher(LimitToTeacher l)
        {
            using (LoveToLerningEntities db= new LoveToLerningEntities())
            {
                db.LimitToTeacher.Add(l);
                db.SaveChanges();
            }
           
        }

        public static LimitToTeacher getLimitToTeacher(int id)
        {
            using (LoveToLerningEntities db=new LoveToLerningEntities())
            {
            return db.LimitToTeacher.FirstOrDefault(u => u.CodeLimitToTeacher == id);
            }
        }
        

            public static LimitToTeacher getLimitByidAndTeacher(int id, int teacher)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.LimitToTeacher.FirstOrDefault(u => u.CodeLimit == id && u.CodeTeacher==teacher);
            }
        }

        public static LimitToTeacher GetUsereByIdAndpass(int limit, int teacher)
        {
            using (LoveToLerningEntities db= new LoveToLerningEntities())
            {
                return db.LimitToTeacher.FirstOrDefault(u => u.CodeLimit == limit && u.CodeTeacher == teacher);

            }
        }

        

    }
}
