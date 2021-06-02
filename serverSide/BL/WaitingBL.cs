using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
    public class WaitingBL
    {
        //הוספה
        public static bool AddWaiting(WaitingDTO c)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                WaitingDB.AddWaiting(WaitingDTO.ToWaiting(c));
                return true;
            }
        }


        //שליפת רשימה
        public static List<WaitingDTO> getWaiting()
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return WaitingDTO.ToListWaitingDTO(db.Waiting.ToList());

            }

        }
        public static List<WaitingDTO> getLimitByUser(int codeUser)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return WaitingDTO.ToListWaitingDTO(WaitingDB.getLimitByUser(codeUser));
            }
        }

        public static WaitingDTO GetWaitingById(int waiting)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return WaitingDTO.ToWaitingDTO(WaitingDB.GetWaitingById(waiting));

            }

        }

        //public static WaitingDTO deleteWaiting(int waitingId)
        //{
        //    using (LoveToLerningEntities db=new LoveToLerningEntities())
        //    {
        //        return WaitingDTO.ToWaitingDTO(WaitingDB.deleteWaiting(waitingId));
        //    }
        //}

        public static bool deleteWaiting(int waitingId)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                WaitingDB.deleteWaiting((waitingId));
                return true;
            }
        }

        public static int getIfWaiting(int waitingId)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
               return WaitingDB.getIfWaiting(waitingId);
            }
        }

    }
}
