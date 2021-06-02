using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class LimitDB
    {
        static LoveToLerningEntities DB = new LoveToLerningEntities();
        //מחזיר רשימת ערים
        public static List<Limit> GetLimit()
        {

            return DB.Limit.ToList();
        }
        //מחזיר עפ' קוד
        public static Limit GetLimitById(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Limit.FirstOrDefault(u => u.CodeLimit == id);

            }
        }

        //מחזיר ע"פ קוד תחום
        public static List<Limit> limitToFather(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Limit.Where(u => u.CodeParentLimit == limit).ToList();
            }

        }




        //BLלהעביר ל
        //מחזיר אב קטגוריה  לפי קוד קטגוריה
        //public static Limit GetParentLimitById(int id)
        //{
        //    if (GetLimitById(id).CodeParentLimit == 0)
        //        return GetLimitById(id);
        //    else
        //      return  GetParentLimitById(GetLimitById(id).CodeParentLimit);           
        //}
        //הוספה
        public static void AddLimit(Limit l)
        {
            DB.Limit.Add(l);
            DB.SaveChanges();
        }
        //עדכון
        public static void UpDateLimit(Limit l)
        {
            var li = DB.Limit.FirstOrDefault(t => t.CodeLimit == l.CodeLimit);
            if (li != null)
            {
                li.NameLimit = l.NameLimit;
                li.CodeParentLimit = l.CodeParentLimit;
            }
            DB.SaveChanges();
        }


        //   מחיקה
        public static void DeleteLimit(Limit l)
        {
            DB.Limit.Remove(l);
            DB.SaveChanges();
        }

        //בדיקה כמה מקצועות יש לכל נושא
        //public static Dictionary<int, string> getNumLimit(Limit l, int limiPar)
        //{
        //    using (LoveToLerningEntities db = new LoveToLerningEntities())
        //    {
        //        limiPar = l.CodeLimit;
        //        int count = 0;
        //        Dictionary<int, string> dicLimit = new Dictionary<int, string>();
        //        int[] counlLim = new int[99];
        //        string[] nameLim = new string[99];

        //        if (l.CodeParentLimit != 0)
        //        {
        //            limiPar = l.CodeParentLimit;
        //            return getNumLimit(l, limiPar);

        //            count++;
        //        }
        //        else
        //        {
        //            if (l.CodeParentLimit == 0)
        //            {
        //                //counlLim[i] = count;
        //                //nameLim[i] = l.NameLimit;
        //                //i++;
        //                dicLimit.Add(count, l.NameLimit);
        //            }
        //        }
        //        //return counlLim[];
        //        return dicLimit;

        //    }



public static List<Class1> getCountToLimit()
        {
            Class1 c=new Class1();
            List<Class1> lReturn = new List<Class1>();
            List<Limit> l = DB.Limit.Where(x => x.CodeParentLimit == 0).ToList();
            foreach (var item in l)
            {
                c = new Class1();
                c.limit = item.NameLimit;
                c.count = getChild(item.CodeLimit);
                lReturn.Add(c);
            }
            return lReturn;
        }
        public static int getChild(int code)
        {
            int c = 0;
            List<Limit> l = DB.Limit.Where(x => x.CodeParentLimit == code).ToList();
            if (l.Count == 0)
                return 1;
            foreach (var item in l)
            {
                c+= getChild(item.CodeLimit);
            }
            return c;
        }
        //}
    }

        //הוספת נושא מחיקה נושא עדכון נושא חיפוש קוד אב קטגוריה לפי קוד

    }
