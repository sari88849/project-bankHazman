using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class TimesDB
    {
        //מחזיר את רשימת הזמנים
        public static List<Times> GetTimes()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Times.ToList();
            }
        }

        public static Times getTimeById(int id)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Times.FirstOrDefault(u => u.IdTime == id);
            }
        }

    }
}
