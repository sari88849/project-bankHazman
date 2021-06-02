using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class LimitDTO
    {
        public int CodeLimit { get; set; }
        public string NameLimit { get; set; }
        public int CodeParentLimit { get; set; }

        public static LimitDTO ToLimitDTO(Limit c)
        {
            LimitDTO c1 = new LimitDTO();
            c1.CodeLimit = c.CodeLimit;
            c1.NameLimit = c.NameLimit;
            c1.CodeParentLimit = c.CodeParentLimit;

            return c1;

        }
        public static Limit ToLimit(LimitDTO c)
        {
            Limit c1 = new Limit();
            c1.CodeLimit = c.CodeLimit;
            c1.NameLimit = c.NameLimit;
            c1.CodeParentLimit = c.CodeParentLimit;
            return c1;
        }
        public static List<Limit> ToListLimit(List<LimitDTO> listc)
        {
            List<Limit> lc = new List<Limit>();
            foreach (var item in listc)
            {
                lc.Add(ToLimit(item));
            }
            return lc;
        }
        public static List<LimitDTO> ToListLimitDTO(List<Limit> listc)
        {
            List<LimitDTO> lc = new List<LimitDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToLimitDTO(item));
            }
            return lc;
        }

    }
}
