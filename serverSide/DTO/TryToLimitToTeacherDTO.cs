using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
  public  class TryToLimitToTeacherDTO
    {
        public int CodeTryToLimitToTeacher { get; set; }
        public int CodeLimitToTeacher { get; set; }
        public string NamePlaceTeach { get; set; }
        public string MailRecommend { get; set; }
        public string PhoneRecommend { get; set; }

        public static TryToLimitToTeacherDTO ToTryToLimitToTeacherDTO(TryToLimitToTeacher c)
        {
            TryToLimitToTeacherDTO c1 = new TryToLimitToTeacherDTO();
            c1.CodeTryToLimitToTeacher = c.CodeTryToLimitToTeacher;
            c1.CodeLimitToTeacher = c.CodeLimitToTeacher;
            c1.NamePlaceTeach = c.NamePlaceTeach;
            c1.MailRecommend = c.MailRecommend;
            c1.PhoneRecommend = c.PhoneRecommend;

            return c1;

        }
        public static TryToLimitToTeacher ToTryToLimitToTeacher(TryToLimitToTeacherDTO c)
        {
            TryToLimitToTeacher c1 = new TryToLimitToTeacher();
            c1.CodeTryToLimitToTeacher = c.CodeTryToLimitToTeacher;
            c1.CodeLimitToTeacher = c.CodeLimitToTeacher;
            c1.NamePlaceTeach = c.NamePlaceTeach;
            c1.MailRecommend = c.MailRecommend;
            c1.PhoneRecommend = c.PhoneRecommend;
            return c1;
        }
        public static List<TryToLimitToTeacher> ToListCities(List<TryToLimitToTeacherDTO> listc)
        {
            List<TryToLimitToTeacher> lc = new List<TryToLimitToTeacher>();
            foreach (var item in listc)
            {
                lc.Add(ToTryToLimitToTeacher(item));
            }
            return lc;
        }
        public static List<TryToLimitToTeacherDTO> ToListTryToLimitToTeacherDTO(List<TryToLimitToTeacher> listc)
        {
            List<TryToLimitToTeacherDTO> lc = new List<TryToLimitToTeacherDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToTryToLimitToTeacherDTO(item));
            }
            return lc;
        }

    }
}
