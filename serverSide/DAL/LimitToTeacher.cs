//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class LimitToTeacher
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public LimitToTeacher()
        {
            this.DiplomasToLimitToTeacher = new HashSet<DiplomasToLimitToTeacher>();
            this.Recommendation = new HashSet<Recommendation>();
            this.TryToLimitToTeacher = new HashSet<TryToLimitToTeacher>();
        }
    
        public int CodeLimitToTeacher { get; set; }
        public int CodeLimit { get; set; }
        public int CodeTeacher { get; set; }
        public Nullable<double> TryYear { get; set; }
        public Nullable<int> CodeUser { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DiplomasToLimitToTeacher> DiplomasToLimitToTeacher { get; set; }
        public virtual Limit Limit { get; set; }
        public virtual Useres Useres { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Recommendation> Recommendation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TryToLimitToTeacher> TryToLimitToTeacher { get; set; }
    }
}
