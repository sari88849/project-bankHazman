using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{


    //הצגת תחום ע"פ תחומים
    public class LimitBL
    {
        public static List<LimitDTO> limitToFather(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LimitDTO.ToListLimitDTO(LimitDB.limitToFather(limit));

            }

        }

        public static List<DAL.Class1> getCountToLimit()
        {
           
                return LimitDB.getCountToLimit();

            
        }
        public static LimitDTO getLimitById(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return LimitDTO.ToLimitDTO(LimitDB.GetLimitById(limit));

            }

        }

        //הוספת תחום
        public static bool AddLimit(LimitDTO l)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                LimitDB.AddLimit(LimitDTO.ToLimit(l));
                return true;
            }
        }

        //כמה מקצועות יש לכל נושא
        //public static int getNumLimit(LimitDTO limit)
        //{
        //    using (LoveToLerningEntities db = new LoveToLerningEntities())
        //    {
        //        return LimitDTO.ToLimitDTO(LimitDB.getNumLimit(limit, limit.CodeLimit));
        //    }
        //}
    }

   
}

