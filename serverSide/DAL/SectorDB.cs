using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
   public class SectorDB
    {
        public static List<Sector> getSector()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return db.Sector.ToList();
            }
        }

        //מחזיר עפ' קוד
        public static Sector getSectorById(int id)
        {
            using(LoveToLerningEntities db= new LoveToLerningEntities())
            {
                
                return db.Sector.FirstOrDefault(u => u.IdSector == id);
            }
        }
    }
}
