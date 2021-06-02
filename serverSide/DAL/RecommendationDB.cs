using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class RecommendationDB
    {
        //הוספה עדכון מחיקת המלצה בדיקה האם המלצה קיימת

        static LoveToLerningEntities DB = new LoveToLerningEntities();
        //מחזיר רשימת ערים
        //public static List<Recommendation> getRecommendation()
        //{
        //    return DB.Recommendation.ToList();
        //}
        ////מחזיר עפ' קוד
        //public static Limit getRecommendation(int id)
        //{
        //    return DB.Limit.FirstOrDefault(u => u.CodeLimit == id);
        //}

        //מחזיר ע"פ קוד תחום
        public static List<Recommendation> getRecommendation(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                //x =db.LimitToTeacher.Where(u => u.CodeLimit == limit && u.CodeTeacher==CodeTeach).Intersect(db.);
                //var z = db.Recommendation.ToList();
                //z = db.Recommendation.Where(u => u.CodeTeacher == CodeTeach).Select(c=>c.CodeLimitToTeacher).Contains(li).ToList();

                //return db.Recommendation.Where(u=>u.CodeTeacher==CodeTeach).Where(db.LimitToTeacher.Where(b=>b.CodeLimit==limit).ToList())



                //var w = db.Recommendation.ToList();
                //w = db.Recommendation.Where(u => u.CodeTeacher == CodeTeach). (db.LimitToTeacher.Where(s=>s.CodeLimit==limit).ToList())
                //return w;


                //var x = db.LimitToTeacher.ToList();
                //if (db.LimitToTeacher.FirstOrDefault(u=>u.CodeTeacher==CodeTeach && u.CodeLimit==limit))

                //x = x.Where(u => u.CodeLimit == limit && u.CodeTeacher == CodeTeach).ToList();

                //return db.Recommendation.Where(z => z.CodeLimitToTeacher == limit).ToList();
                var q = 0;
                foreach (var item in db.LimitToTeacher)
                {
                    if (item.CodeLimit == limit)
                        q = item.CodeLimitToTeacher;
                }
                return db.Recommendation.Where(u => u.CodeLimitToTeacher == q).ToList();


            }
            //q = q.Where(p => p.LimitToTeacher.Select(u => u.CodeLimit).Contains(codeLimit)).ToList();
            //return q;




        }

        public static void AddRecommendation(Recommendation l)
        {
            DB.Recommendation.Add(l);
            DB.SaveChanges();
        }

    }
}
