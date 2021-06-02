using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class TimeToUserDTO
    {
        public int IdUser { get; set; }
        public int IdTime { get; set; }

        public static TimeToUserDTO ToTimeToUserDTO(TimeToUser c)
        {
            TimeToUserDTO c1 = new TimeToUserDTO();
            c1.IdUser = Convert.ToInt32(c.IdUser);
            c1.IdTime = Convert.ToInt32(c.IdTime);
            return c1;
        }
        public static TimeToUser ToTimeToUser(TimeToUserDTO c)
        {
            TimeToUser c1 = new TimeToUser();
            c1.IdUser = c.IdUser;
            c1.IdTime = c.IdTime;
            return c1;
        }
        public static List<TimeToUser> ToListTimeToUser(List<TimeToUserDTO> listc)
        {
            List<TimeToUser> lc = new List<TimeToUser>();
            foreach (var item in listc)
            {
                lc.Add(ToTimeToUser(item));
            }
            return lc;
        }
        public static List<TimeToUserDTO> ToListTimeToUserDTO(List<TimeToUser> listc)
        {
            List<TimeToUserDTO> lc = new List<TimeToUserDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToTimeToUserDTO(item));
            }
            return lc;
        }

    }
}
