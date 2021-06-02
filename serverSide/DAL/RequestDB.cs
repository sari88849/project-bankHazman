using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
  public class RequestDB
    {
        //הצגת התחומים לפי קוד תחום
        public static List<Request> getRequest(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Request.Where(u => u.CodeLimit == limit).ToList();
            }
        }

      

       
    }
}
