using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class TimesDTO
    {
        public int IdTime { get; set; }
        public string NameTime { get; set; }

        public static TimesDTO ToTimesDTO(Times c)
        {
            TimesDTO c1 = new TimesDTO();
            c1.IdTime = c.IdTime;
            c1.NameTime = c.NameTime;
            return c1;

        }
        public static Times ToTimes(TimesDTO c)
        {
            Times c1 = new Times();
            c1.IdTime = c.IdTime;
            c1.NameTime = c.NameTime;
            return c1;
        }
        public static List<Times> ToListTimes(List<TimesDTO> listc)
        {
            List<Times> lc = new List<Times>();
            foreach (var item in listc)
            {
                lc.Add(ToTimes(item));
            }
            return lc;
        }
        public static List<TimesDTO> ToListTimesDTO(List<Times> listc)
        {
            List<TimesDTO> lc = new List<TimesDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToTimesDTO(item));
            }
            return lc;
        }

    }
}
