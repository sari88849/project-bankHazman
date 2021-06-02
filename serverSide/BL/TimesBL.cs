using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class TimesBL
    {
        //שליפת רשימה
        public static List<TimesDTO> getTimes()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return TimesDTO.ToListTimesDTO(db.Times.ToList());

            }

        }

        public static TimesDTO getTimeById(int time)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return TimesDTO.ToTimesDTO(TimesDB.getTimeById(time));

            }

        }
    }
}
