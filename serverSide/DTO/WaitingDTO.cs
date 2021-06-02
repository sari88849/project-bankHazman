using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class WaitingDTO
    {
        public int WaitingID { get; set; }
        public Nullable<int> CodeUser { get; set; }
        public Nullable<int> CodeLimit { get; set; }
        public Nullable<int> CodeTime { get; set; }
        public Nullable<int> CodeMin { get; set; }
        public Nullable<int> CodeSector { get; set; }


        public static WaitingDTO ToWaitingDTO(Waiting c)
        {
            try
            {
                WaitingDTO c1 = new WaitingDTO();
                c1.WaitingID = c.WaitingID;
                c1.CodeUser = c.CodeUser;
                c1.CodeLimit = c.CodeLimit;
                c1.CodeTime = c.CodeTime;
                c1.CodeMin = c.CodeMin;
                c1.CodeSector = c.CodeSector;

                return c1;
            }
            catch (Exception e)
            {
                throw e;
            }
           

        }
        public static Waiting ToWaiting(WaitingDTO c)
        {
            Waiting c1 = new Waiting();
            c1.WaitingID = c.WaitingID;
            c1.CodeUser = c.CodeUser;
            c1.CodeLimit = c.CodeLimit;
            c1.CodeTime = c.CodeTime;
            c1.CodeMin = c.CodeMin;
            c1.CodeSector = c.CodeSector;
            return c1;
        }
        public static List<Waiting> ToListWaiting(List<WaitingDTO> listc)
        {
            List<Waiting> lc = new List<Waiting>();
            foreach (var item in listc)
            {
                lc.Add(ToWaiting(item));
            }
            return lc;
        }
        public static List<WaitingDTO> ToListWaitingDTO(List<Waiting> listc)
        {
            List<WaitingDTO> lc = new List<WaitingDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToWaitingDTO(item));
            }
            return lc;
        }

    }
}
