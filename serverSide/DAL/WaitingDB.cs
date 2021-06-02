using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public  class WaitingDB
    {
        //הוספה
        public static bool AddWaiting(Waiting u)
        {
            try
            {
                using (LoveToLerningEntities db = new LoveToLerningEntities())
                {
                    db.Waiting.Add(u);
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            
        }

        public static bool deleteWaiting(int waitingId)
        {
            try
            {
                using (LoveToLerningEntities db = new LoveToLerningEntities())
                {
                    var q = db.Waiting.FirstOrDefault(c => c.WaitingID == waitingId);
                    db.Waiting.Remove(q);
                    db.SaveChanges();
                    return true;
                }
            }
           catch (Exception e)
            {
                throw e;
            }
        }


        //מחזיר רשימה
        public static List<Waiting> getWaiting()
        {
            try
            {
                using (LoveToLerningEntities db = new LoveToLerningEntities())
                {
                    return db.Waiting.ToList();
                }
            }
            catch (Exception e)
            {
                throw e;
            }
           
        }

        //מחזיר רשימת מורות לפי תחומים
        public static List<Waiting> getLimitByUser(int codeUser)
        {
            try
            {
                using (LoveToLerningEntities db = new LoveToLerningEntities())
                {
                    //קודים של נושאים של רשימת המתנה
                    var q = db.Waiting.Select(z => z.CodeLimit).ToList();
                    //סינון עליו גם לפי מגזר מגדר זמן
                    //רשימת קודי נושאים לפי נושא למורה  ברשימת המתנה
                    var t = db.LimitToTeacher.Where(e => q.Contains(e.CodeLimit) && e.CodeTeacher == codeUser).Select(r => r.CodeLimit).ToList();
                    if (t.Count() > 0)
                    {
                        var w = db.Waiting.Where(y => t.Contains((int)y.CodeLimit)).ToList();

                        return w;
                    }
                    // var w=db.Waiting.Where(u=>t.Contains(u.CodeLimit)).
                    return null;

                }

            }
            catch(Exception e)
            {
                throw e;
            }
        }
        public static Waiting GetWaitingById(int id)
        {
            try
            {
                using (LoveToLerningEntities db = new LoveToLerningEntities())
                {
                    return db.Waiting.FirstOrDefault(u => u.WaitingID == id);
                }
            }
            catch (Exception e)
            {
                throw e;
            }
            
        }
        public static int getIfWaiting(int waitingId)
        {
            try
            {
                using (LoveToLerningEntities db = new LoveToLerningEntities())
                {
                    //var e = db.Waiting.Where(c => c.WaitingID == waitingId);
                    //if (e.Count()>0)
                    //{
                    //    return true;
                    //}
                    //else
                    //{
                    //    return false;
                    //}
                    var count = 0;
                    foreach (var item in db.Waiting)
                    {
                        if (item.WaitingID == waitingId)
                        {
                            count++;
                        }
                    }
                    return count;
                    //var q = db.Waiting.Include((r=>r.w));
                    //return bool.Parse(q.ToString());
                }
            }
            catch(Exception e)
            {
                throw e;
            }
           
        }

        



        //מחזיר רשימה המתנות לפי תחום למורה נוכחית
        //public static List<Waiting> getWaitingByLimit(int codeuser)
        //{
        //    using (LoveToLerningEntities db = new LoveToLerningEntities())
        //    {
        //        var e = db.LimitToTeacher.Where(x => x.CodeTeacher == codeuser).ToList();
        //        var c=db.Waiting.Select(r=>r.CodeLimit).Intersect(e)
        //        var q = db.Waiting.Where(z=>z.CodeLimit==e.Select(u=>u.CodeLimit)).ToList();
        //        return q.Select(b=>b.CodeLimit==e.)
        //        q = q.Where(p => p.LimitToTeacher.Select(u => u.CodeLimit).Contains(codeLimit)).ToList();

        //        //var w = db.Waiting.ToList();
        //        //return db.Waiting.Where(x => x.CodeLimit == q.Where(c => c.CodeLimit==x.CodeLimit)).to


        //        //var e =q.Where(x=>x.CodeLimit==w.Find(x.))
        //        //w = w.Where(
        //        return q;
        //    }
        //}








    }
}
